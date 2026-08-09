import { Injectable, Logger } from '@nestjs/common';
import * as cheerio from 'cheerio';

import { SourcePlugin } from '@ever-jobs/plugin';
import {
  IScraper,
  ScraperInputDto,
  JobResponseDto,
  JobPostDto,
  LocationDto,
  Site,
} from '@ever-jobs/models';
import {
  createHttpClient,
  extractEmails,
} from '@ever-jobs/common';

import {
  WORKUA_BASE_URL,
  WORKUA_DEFAULT_RESULTS,
  WORKUA_HEADERS,
  WORKUA_MAX_PAGES,
} from './workua.constants';
import { WorkUaHtmlItem } from './workua.types';

@SourcePlugin({
  site: Site.WORKUA,
  name: 'Work.ua',
  category: 'regional',
})
@Injectable()
export class WorkUaService implements IScraper {
  private readonly logger = new Logger(WorkUaService.name);

  async scrape(input: ScraperInputDto): Promise<JobResponseDto> {
    const searchTerm = input.searchTerm?.trim();

    if (!searchTerm) {
      this.logger.warn('Work.ua requires a search term');
      return new JobResponseDto([]);
    }

    const resultsWanted =
      input.resultsWanted ?? WORKUA_DEFAULT_RESULTS;

    const client = createHttpClient({
      proxies: input.proxies,
      caCert: input.caCert,
      timeout: input.requestTimeout,
    });

    client.setHeaders(WORKUA_HEADERS);

    const jobs: JobPostDto[] = [];
    const processedIds = new Set<string>();

    this.logger.log(
      `Searching Work.ua for "${searchTerm}" ` +
        `(resultsWanted=${resultsWanted})`,
    );

    try {
      for (
        let page = 1;
        page <= WORKUA_MAX_PAGES &&
        jobs.length < resultsWanted;
        page += 1
      ) {
        const url = this.buildSearchUrl(searchTerm, page);

        this.logger.log(`Fetching Work.ua page ${page}: ${url}`);

        const response = await client.get(url);
        const html = response.data;

        if (!html || typeof html !== 'string') {
          this.logger.warn(
            `Empty or invalid HTML response from Work.ua page ${page}`,
          );
          break;
        }

        const items = this.parseHtmlItems(html);

        this.logger.log(
          `Work.ua page ${page}: parsed ${items.length} vacancy cards`,
        );

        if (items.length === 0) {
          break;
        }

        let addedOnPage = 0;

        for (const item of items) {
          if (jobs.length >= resultsWanted) {
            break;
          }

          if (processedIds.has(item.id)) {
            continue;
          }

          const job = this.mapJob(item);

          if (!job) {
            continue;
          }

          processedIds.add(item.id);
          jobs.push(job);
          addedOnPage += 1;
        }

        // Захист від повторення однакових вакансій на різних сторінках.
        if (addedOnPage === 0) {
          this.logger.warn(
            `Work.ua page ${page} contained no new vacancies`,
          );
          break;
        }
      }

      this.logger.log(`Work.ua returned ${jobs.length} jobs`);

      return new JobResponseDto(jobs);
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : String(error);

      this.logger.error(`Work.ua scrape error: ${message}`);

      return new JobResponseDto([]);
    }
  }

  /**
   * Формує:
   * page 1: https://www.work.ua/jobs-odoo-developer/
   * page 2: https://www.work.ua/jobs-odoo-developer/?page=2
   */
  private buildSearchUrl(
    searchTerm: string,
    page: number,
  ): string {
    const slug = searchTerm
      .trim()
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean)
      .map((part) => encodeURIComponent(part))
      .join('-');

    const baseSearchUrl =
      `${WORKUA_BASE_URL}/jobs-${slug}/`;

    return page === 1
      ? baseSearchUrl
      : `${baseSearchUrl}?page=${page}`;
  }

  private parseHtmlItems(html: string): WorkUaHtmlItem[] {
    const $ = cheerio.load(html);
    const items: WorkUaHtmlItem[] = [];

    $('.job-link').each((_, element) => {
      const card = $(element);

      const titleLink = card.find('h2 a').first();

      const title = this.cleanText(titleLink.text());
      const relativeJobUrl = this.cleanText(
        titleLink.attr('href'),
      );

      if (!title || !relativeJobUrl) {
        return;
      }

      const id = this.extractIdFromUrl(relativeJobUrl);

      if (!id) {
        return;
      }

      const companyRow = card
        .find('.glyphicon-company')
        .closest('.text-indent');

      const company = this.cleanText(
        companyRow
          .find('.strong-600')
          .first()
          .text(),
      );

      const location = this.extractLocation(
        companyRow,
        company,
      );

      const salary = this.cleanText(
        card
          .find('.glyphicon-hryvnia-fill')
          .closest('.text-indent')
          .find('.strong-600')
          .first()
          .text(),
      );

      const description = this.cleanText(
        card
          .find('p.ellipsis')
          .first()
          .text(),
      );

      const logoUrl = this.cleanText(
        card
          .find('img.preview-img-logo')
          .first()
          .attr('src'),
      );

      const rawDatePosted = this.cleanText(
        card
          .find('time[datetime]')
          .first()
          .attr('datetime'),
      );

      const datePosted = this.normalizeDate(
        rawDatePosted,
      );

      const isRemote = this.checkRemote(
        location,
        description,
        title,
      );

      const {
        employmentInfo,
        experienceInfo,
      } = this.extractEmploymentInfo(description);

      items.push({
        id,
        title,
        company: company ?? undefined,
        jobUrl: this.toAbsoluteUrl(relativeJobUrl),
        location: location ?? undefined,
        isRemote,
        salary: salary ?? undefined,
        description: description ?? undefined,
        employmentInfo,
        experienceInfo,
        logoUrl: logoUrl ?? undefined,
        datePosted: datePosted ?? undefined,
      });
    });

    return items;
  }

  /**
   * У Work.ua компанія та локація знаходяться в одному рядку:
   *
   * Swapni, Sp. z o.o., Дистанційно
   *
   * Компанію беремо окремо через .strong-600,
   * а з повного тексту рядка прибираємо її назву.
   */
  private extractLocation(
    companyRow: cheerio.Cheerio<any>,
    company: string | null,
  ): string | null {
    const fullText = this.cleanText(companyRow.text());

    if (!fullText) {
      return null;
    }

    let location = fullText;

    if (company) {
      location = location.replace(company, '');
    }

    return this.cleanText(
      location.replace(/^,\s*/, ''),
    );
  }

  private mapJob(
    item: WorkUaHtmlItem,
  ): JobPostDto | null {
    if (!item.id || !item.title || !item.jobUrl) {
      return null;
    }

    return new JobPostDto({
      id: `workua-${item.id}`,
      site: Site.WORKUA,
      title: item.title,
      companyName: item.company ?? null,
      jobUrl: item.jobUrl,

      location: item.location
        ? new LocationDto({
            city: item.location,
          })
        : null,

      isRemote: item.isRemote ?? false,
      description: item.description,
      datePosted: item.datePosted,

      // Поле salary поки не мапимо в compensation,
      // доки не перевіримо структуру CompensationDto.
      compensation: undefined,

      emails: extractEmails(
        item.description ?? null,
      ),
    });
  }

  private checkRemote(
    location?: string | null,
    description?: string | null,
    title?: string | null,
  ): boolean {
    const searchableText = [
      location,
      description,
      title,
    ]
      .filter(
        (value): value is string =>
          Boolean(value),
      )
      .join(' ')
      .toLowerCase();

    const remoteKeywords = [
      'remote',
      'дистанційно',
      'дистанційна',
      'дистанційний',
      'віддалено',
      'віддалена',
      'віддалений',
    ];

    return remoteKeywords.some((keyword) =>
      searchableText.includes(keyword),
    );
  }

  /**
   * Витягує ID з URL:
   * /jobs/8367057/ → 8367057
   */
  private extractIdFromUrl(
    url: string,
  ): string | null {
    const match = url.match(
      /\/jobs\/(\d+)\/?/,
    );

    return match?.[1] ?? null;
  }

  /**
   * Витягує з початку опису:
   * "Повна зайнятість"
   * "Досвід роботи від 1 року"
   */
  private extractEmploymentInfo(
    description: string | null,
  ): {
    employmentInfo?: string;
    experienceInfo?: string;
  } {
    if (!description) {
      return {};
    }

    const parts = description
      .split('.')
      .map((part) => part.trim())
      .filter(Boolean);

    const employmentInfo = parts.find((part) =>
      /зайнятість/i.test(part),
    );

    const experienceInfo = parts.find((part) =>
      /досвід роботи/i.test(part),
    );

    return {
      employmentInfo,
      experienceInfo,
    };
  }

  /**
   * Work.ua повертає:
   * 2026-08-01 16:25:29
   *
   * У JobPostDto передаємо:
   * 2026-08-01
   */
  private normalizeDate(
    value: string | null,
  ): string | null {
    if (!value) {
      return null;
    }

    const datePart = value.match(
      /^\d{4}-\d{2}-\d{2}/,
    );

    return datePart?.[0] ?? null;
  }

  private toAbsoluteUrl(url: string): string {
    try {
      return new URL(
        url,
        WORKUA_BASE_URL,
      ).toString();
    } catch {
      return url;
    }
  }

  private cleanText(
    value: string | null | undefined,
  ): string | null {
    if (!value) {
      return null;
    }

    const cleaned = value
      .replace(/\u00a0/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    return cleaned || null;
  }
}