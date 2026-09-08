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
import { createHttpClient } from '@ever-jobs/common';

import {
  HAPPYMONDAY_BASE_URL,
  HAPPYMONDAY_DEFAULT_RESULTS,
  HAPPYMONDAY_HEADERS,
  HAPPYMONDAY_MAX_PAGES,
} from './happymonday.constants';
import { HappyMondayHtmlItem } from './happymonday.types';

@SourcePlugin({
  site: Site.HAPPYMONDAY,
  name: 'Happy Monday',
  category: 'regional',
})
@Injectable()
export class HappyMondayService implements IScraper {
  private readonly logger = new Logger(HappyMondayService.name);

  async scrape(input: ScraperInputDto): Promise<JobResponseDto> {
    const searchTerm = input.searchTerm?.trim();

    if (!searchTerm) {
      this.logger.warn('Happy Monday requires a search term');
      return new JobResponseDto([]);
    }

    const resultsWanted =
      input.resultsWanted ?? HAPPYMONDAY_DEFAULT_RESULTS;

    const client = createHttpClient({
      proxies: input.proxies,
      caCert: input.caCert,
      timeout: input.requestTimeout,
    });

    client.setHeaders(HAPPYMONDAY_HEADERS);

    const jobs: JobPostDto[] = [];
    const processedIds = new Set<string>();

    this.logger.log(
      `Searching Happy Monday for "${searchTerm}" ` +
        `(resultsWanted=${resultsWanted})`,
    );

    try {
      for (
        let page = 1;
        page <= HAPPYMONDAY_MAX_PAGES &&
        jobs.length < resultsWanted;
        page += 1
      ) {
        const url = this.buildSearchUrl(searchTerm, page);

        this.logger.log(`Fetching Happy Monday page ${page}: ${url}`);

        const response = await client.get(url);
        const html = response.data;

        if (!html || typeof html !== 'string') {
          this.logger.warn(
            `Empty or invalid HTML response from Happy Monday page ${page}`,
          );
          break;
        }

        const items = this.parseHtmlItems(html);

        this.logger.log(
          `Happy Monday page ${page}: parsed ${items.length} vacancy cards`,
        );

        // Порожня сторінка означає, що пагінацію завершено.
        if (items.length === 0) {
          break;
        }

        let addedOnPage = 0;

        for (const item of items) {
          // if (jobs.length >= resultsWanted) {
          //   break;
          // }

          if (!item.id || processedIds.has(item.id)) {
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

        // Захист від нескінченного повторення тієї самої сторінки.
        if (addedOnPage === 0) {
          this.logger.warn(
            `Happy Monday page ${page} contained no new vacancies`,
          );
          break;
        }
      }

      this.logger.log(`Happy Monday returned ${jobs.length} jobs`);

      return new JobResponseDto(jobs);
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : String(error);

      this.logger.error(`Happy Monday scrape error: ${message}`);

      return new JobResponseDto([]);
    }
  }

  private buildSearchUrl(searchTerm: string, page: number): string {
    const encodedTerm = encodeURIComponent(searchTerm);
    const baseSearchUrl =
      `${HAPPYMONDAY_BASE_URL}/jobs-search/search=${encodedTerm}`;

    return page === 1
      ? baseSearchUrl
      : `${baseSearchUrl}/page/${page}`;
  }

  private parseHtmlItems(html: string): HappyMondayHtmlItem[] {
    const $ = cheerio.load(html);
    const items: HappyMondayHtmlItem[] = [];

    $('.job_card').each((_, element) => {
      const card = $(element);

      const id = this.cleanText(card.attr('data-post-id'));

      const titleLink = card.find('.job_card__title a').first();
      const title = this.cleanText(titleLink.text());
      const relativeJobUrl = this.cleanText(titleLink.attr('href'));

      if (!id || !title || !relativeJobUrl) {
        return;
      }

      const company = this.extractCompany(card);
      const location = this.cleanText(
        card.find('._joblocation').first().text(),
      );
      const remote = this.cleanText(
        card.find('._jobremote').first().text(),
      );
      const level = this.cleanText(
        card.find('._joblevel').first().text(),
      );
      const logoUrl = this.cleanText(
        card
          .find('.vacancies__search-item__img img')
          .first()
          .attr('src'),
      );
      const updatedAt = this.cleanText(
        card.find('.job_timing').first().text(),
      );

      items.push({
        id,
        title,
        company: company ?? undefined,
        jobUrl: this.toAbsoluteUrl(relativeJobUrl),
        location: location ?? undefined,
        remote: remote ?? undefined,
        level: level ?? undefined,
        logoUrl: logoUrl ?? undefined,
        updatedAt: updatedAt ?? undefined,
      });
    });

    return items;
  }

  private extractCompany(
  card: cheerio.Cheerio<any>,
): string | null {
  return this.cleanText(
    card.find('.job_card_company').first().text(),
  );
}

  // private extractCompany(
  //   card: cheerio.Cheerio<any>,
  // ): string | null {
  //   const titleContainer = card
  //     .find('.vacancies__search-item__titles')
  //     .first();
  //
  //   let company: string | null = null;
  //
  //   titleContainer.children('span').each((_, element) => {
  //     const span = titleContainer.find(element);
  //
  //     // Пропускаємо industry та інші службові plate-елементи.
  //     if (span.hasClass('job_plate')) {
  //       return;
  //     }
  //
  //     const text = this.cleanText(span.text());
  //
  //     if (text && !company) {
  //       company = text;
  //     }
  //   });
  //
  //   return company;
  // }

  private mapJob(
    item: HappyMondayHtmlItem,
  ): JobPostDto | null {
    if (!item.id || !item.title || !item.jobUrl) {
      return null;
    }

    const isRemote = this.checkRemote(item);

    return new JobPostDto({
      id: `happymonday-${item.id}`,
      site: Site.HAPPYMONDAY,
      title: item.title,
      companyName: item.company ?? null,
      jobUrl: item.jobUrl,
      location: item.location
        ? new LocationDto({
            city: item.location,
          })
        : null,
      isRemote,

      // У картці пошуку опису та точної дати публікації немає.
      description: undefined,
      datePosted: undefined,
      compensation: undefined,
      emails: [],
    });
  }

  private checkRemote(item: HappyMondayHtmlItem): boolean {
    const searchableText = [
      item.remote,
      item.location,
      item.title,
    ]
      .filter((value): value is string => Boolean(value))
      .join(' ')
      .toLowerCase();

    const remoteKeywords = [
      'remote',
      'віддалено',
      'віддалена',
      'віддалений',
      'дистанційно',
      'дистанційна',
    ];

    return remoteKeywords.some((keyword) =>
      searchableText.includes(keyword),
    );
  }

  private toAbsoluteUrl(url: string): string {
    try {
      return new URL(url, HAPPYMONDAY_BASE_URL).toString();
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

    const cleaned = value.replace(/\s+/g, ' ').trim();

    return cleaned || null;
  }
}