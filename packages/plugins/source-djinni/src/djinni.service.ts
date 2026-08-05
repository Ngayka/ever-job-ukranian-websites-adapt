import * as cheerio from 'cheerio';

import { SourcePlugin } from '@ever-jobs/plugin';
import { Injectable, Logger } from '@nestjs/common';

import {
  IScraper,
  ScraperInputDto,
  JobResponseDto,
  JobPostDto,
  LocationDto,
  Site,
  DescriptionFormat,
} from '@ever-jobs/models';

import {
  createHttpClient,
  htmlToPlainText,
  markdownConverter,
  extractEmails,
} from '@ever-jobs/common';

import {
  DJINNI_JOBS_URL,
  DJINNI_HEADERS,
} from './djinni.constants';

import { DjinniHtmlJob } from './djinni.types';

@SourcePlugin({
  site: Site.DJINNI,
  name: 'Djinni',
  category: 'regional',
})
@Injectable()
export class DjinniService implements IScraper {
  private readonly logger = new Logger(DjinniService.name);

  async scrape(input: ScraperInputDto): Promise<JobResponseDto> {
    const resultsWanted = input.resultsWanted ?? 25;
    const searchTerm = input.searchTerm?.trim();

    const client = createHttpClient({
      proxies: input.proxies,
      caCert: input.caCert,
      timeout: input.requestTimeout,
    });

    client.setHeaders(DJINNI_HEADERS);

    const searchUrl = this.buildSearchUrl(searchTerm);

    this.logger.log(
      `Fetching Djinni HTML search: ${searchUrl} ` +
        `(resultsWanted=${resultsWanted})`,
    );

    try {
      const response = await client.get(searchUrl);
      const html = response.data;

      if (!html || typeof html !== 'string') {
        this.logger.warn('Empty or invalid HTML response from Djinni');
        return new JobResponseDto([]);
      }

      const parsedJobs = this.parseJobs(html);

      this.logger.log(
        `Parsed ${parsedJobs.length} jobs from Djinni HTML`,
      );

      const jobs: JobPostDto[] = [];

      for (const parsedJob of parsedJobs) {
        if (jobs.length >= resultsWanted) {
          break;
        }

        try {
          /*
           * Djinni вже виконує серверний пошук через all_keywords.
           * Додаткова перевірка потрібна лише як захист від нерелевантної
           * видачі або зміни поведінки сайту.
           */
          if (
            searchTerm &&
            !this.matchesSearch(parsedJob, searchTerm)
          ) {
            continue;
          }

          const job = this.mapJob(
            parsedJob,
            input.descriptionFormat,
          );

          jobs.push(job);
        } catch (error: unknown) {
          const message =
            error instanceof Error
              ? error.message
              : String(error);

          this.logger.warn(
            `Error mapping Djinni job ${parsedJob.link}: ${message}`,
          );
        }
      }

      this.logger.log(`Djinni returned ${jobs.length} jobs`);

      return new JobResponseDto(jobs);
    } catch (error: unknown) {
      const message =
        error instanceof Error
          ? error.message
          : String(error);

      this.logger.error(`Djinni scrape error: ${message}`);

      return new JobResponseDto([]);
    }
  }

  /**
   * Builds:
   *
   * https://djinni.co/jobs/
   *   ?all_keywords=Odoo+developer
   *   &search_type=basic-search
   */
  private buildSearchUrl(searchTerm?: string): string {
    const url = new URL(DJINNI_JOBS_URL);

    if (searchTerm) {
      url.searchParams.set('all_keywords', searchTerm);
      url.searchParams.set('search_type', 'basic-search');
    }

    return url.toString();
  }

  /**
   * Parses all job cards available on the Djinni search page.
   *
   * The full description is already present inside:
   *
   * .js-original-text
   *
   * even though it is hidden using the d-none class.
   */
  private parseJobs(html: string): DjinniHtmlJob[] {
    const $ = cheerio.load(html);
    const jobs: DjinniHtmlJob[] = [];
    const processedLinks = new Set<string>();

    $('a.job_item__header-link').each((_, linkElement) => {
      const headerLink = $(linkElement);

      const relativeLink = headerLink.attr('href');

      if (!relativeLink) {
        return;
      }

      const link = new URL(
        relativeLink,
        DJINNI_JOBS_URL,
      ).toString();

      /*
       * Захист від дублювання, якщо на сторінці той самий лінк
       * випадково присутній у кількох елементах.
       */
      if (processedLinks.has(link)) {
        return;
      }

      processedLinks.add(link);

      const card = headerLink.closest('[id^="job-item-"]');

      /*
       * Якщо Djinni змінить зовнішній контейнер,
       * беремо найближчий великий батьківський блок.
       */
      const container = card.length
        ? card
        : headerLink.parent().parent().parent();

      const title = container
        .find('.job-item__position')
        .first()
        .text()
        .trim();

      if (!title) {
        return;
      }

      const companyName =
        container
          .find(
            '.text-gray-800.opacity-75.font-weight-500',
          )
          .first()
          .text()
          .trim() || undefined;

      const descriptionHtml =
        container
          .find('.js-original-text')
          .first()
          .html()
          ?.trim() ||
        container
          .find('.js-truncated-text')
          .first()
          .html()
          ?.trim() ||
        undefined;

      const location =
        container
          .find('.location-text')
          .first()
          .text()
          .trim() || undefined;

      const metadataText = this.normalizeWhitespace(
        container
          .find('.location-text')
          .first()
          .closest('.fw-medium')
          .text(),
      );

      const descriptionText = descriptionHtml
        ? htmlToPlainText(descriptionHtml)
        : '';

      const isRemote = this.checkRemote(
        title,
        metadataText,
        descriptionText,
      );

      const cardId = container.attr('id');

      const id =
        this.extractIdFromCardId(cardId) ??
        this.extractIdFromUrl(link);

      const datePosted =
        this.extractDatePosted(container, $);

      jobs.push({
        id,
        title,
        link,
        descriptionHtml,
        companyName,
        location,
        datePosted,
        isRemote,
      });
    });

    return jobs;
  }

  /**
   * Djinni already filters by all_keywords, but this prevents
   * obviously unrelated jobs from leaking into the result.
   *
   * For "Odoo developer", both tokens must exist somewhere
   * in title + description.
   */
  private matchesSearch(
    job: DjinniHtmlJob,
    searchTerm: string,
  ): boolean {
    const searchableText = this.normalizeForSearch(
      [
        job.title,
        job.descriptionHtml
          ? htmlToPlainText(job.descriptionHtml)
          : '',
        job.companyName ?? '',
        job.location ?? '',
      ].join(' '),
    );

    const searchTokens = this.normalizeForSearch(searchTerm)
      .split(' ')
      .filter(token => token.length > 1);

    if (!searchTokens.length) {
      return true;
    }

    return searchTokens.every(token =>
      searchableText.includes(token),
    );
  }

  private mapJob(
    parsedJob: DjinniHtmlJob,
    descriptionFormat?: DescriptionFormat,
  ): JobPostDto {
    const plainDescription = parsedJob.descriptionHtml
      ? htmlToPlainText(parsedJob.descriptionHtml)
      : undefined;

    let description: string | undefined;

    if (parsedJob.descriptionHtml) {
      if (descriptionFormat === DescriptionFormat.PLAIN) {
        description = plainDescription;
      } else if (
        descriptionFormat === DescriptionFormat.MARKDOWN
      ) {
        description =
          markdownConverter(parsedJob.descriptionHtml) ??
          plainDescription;
      } else {
        description = parsedJob.descriptionHtml;
      }
    }

    return new JobPostDto({
      id: `djinni-${parsedJob.id}`,
      title: parsedJob.title,
      jobUrl: parsedJob.link,
      description,
      companyName: parsedJob.companyName ?? null,

      /*
       * $$$ на Djinni — це не реальна зарплата,
       * а лише відносний рівень зарплати.
       * Тому в compensation його не записуємо.
       */
      compensation: undefined,

      location: parsedJob.location
        ? new LocationDto({
            country: parsedJob.location,
          })
        : null,
      datePosted: parsedJob.datePosted,
      isRemote: parsedJob.isRemote,

      /*
       * Email краще шукати у plain text,
       * а не в HTML із тегами.
       */
      emails: extractEmails(plainDescription ?? null),

      site: Site.DJINNI,
    });
  }

  private checkRemote(
    title: string,
    metadata: string,
    description: string,
  ): boolean {
    const text = this.normalizeForSearch(
      `${title} ${metadata} ${description}`,
    );

    const remoteMarkers = [
      'remote',
      'remotely',
      'fully remote',
      'full remote',
      'тільки віддалено',
      'віддалено',
      'дистанційно',
      'удаленно',
      'полностью удаленно',
    ];

    return remoteMarkers.some(marker =>
      text.includes(marker),
    );
  }

  /**
   * Searches for a tooltip such as:
   *
   * title="16:36 30.07.2026"
   */
  private extractDatePosted(
    container: cheerio.Cheerio<any>,
    $: cheerio.CheerioAPI,
  ): string | undefined {
    let rawDate: string | undefined;

    container.find('[title]').each((_, element) => {
      const title = $(element).attr('title')?.trim();

      if (
        title &&
        /^\d{2}:\d{2}\s+\d{2}\.\d{2}\.\d{4}$/.test(title)
      ) {
        rawDate = title;
        return false;
      }

      return;
    });

    if (!rawDate) {
      return undefined;
    }

    const match =
      /^\d{2}:\d{2}\s+(\d{2})\.(\d{2})\.(\d{4})$/.exec(
        rawDate,
      );

    if (!match) {
      return undefined;
    }

    const [, day, month, year] = match;

    return `${year}-${month}-${day}`;
  }

  private extractIdFromCardId(
    cardId?: string,
  ): string | undefined {
    if (!cardId) {
      return undefined;
    }

    const match = /^job-item-(\d+)$/.exec(cardId);

    return match?.[1];
  }

  /**
   * For:
   *
   * /jobs/816609-odoo-developer/
   *
   * returns:
   *
   * 816609
   */
  private extractIdFromUrl(url: string): string {
    try {
      const parsedUrl = new URL(url);

      const match =
        /\/jobs\/(\d+)(?:-[^/]+)?\/?/.exec(
          parsedUrl.pathname,
        );

      if (match?.[1]) {
        return match[1];
      }

      const segments = parsedUrl.pathname
        .split('/')
        .filter(Boolean);

      return (
        segments[segments.length - 1] ??
        this.hashString(url)
      );
    } catch {
      return this.hashString(url);
    }
  }

  private normalizeForSearch(value: string): string {
    return this.normalizeWhitespace(value)
      .toLowerCase()
      .replace(/[.,;:!?()[\]{}"'`/\\|_-]+/g, ' ');
  }

  private normalizeWhitespace(value: string): string {
    return value.replace(/\s+/g, ' ').trim();
  }

  private hashString(value: string): string {
    let hash = 0;

    for (let index = 0; index < value.length; index++) {
      const char = value.charCodeAt(index);
      hash = ((hash << 5) - hash + char) | 0;
    }

    return Math.abs(hash).toString(36);
  }
}