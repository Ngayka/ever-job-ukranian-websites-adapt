import * as cheerio from 'cheerio';

import { Injectable, Logger } from '@nestjs/common';
import { SourcePlugin } from '@ever-jobs/plugin';

import {
  DescriptionFormat,
  IScraper,
  JobPostDto,
  JobResponseDto,
  ScraperInputDto,
  Site,
} from '@ever-jobs/models';

import {
  createHttpClient,
  extractEmails,
  htmlToPlainText,
} from '@ever-jobs/common';

import {
  ODOO_JOBS_HEADERS,
  ODOO_JOBS_URL,
} from './odoo-jobs.constants';

import { OdooJob } from './odoo-jobs.types';

@SourcePlugin({
  site: Site.ODOO_JOBS,
  name: 'Odoo Jobs',
  category: 'company',
})
@Injectable()
export class OdooJobsService implements IScraper {
  private readonly logger = new Logger(OdooJobsService.name);

  async scrape(input: ScraperInputDto): Promise<JobResponseDto> {
    const resultsWanted = input.resultsWanted ?? 25;

    const client = createHttpClient({
      proxies: input.proxies,
      caCert: input.caCert,
      timeout: input.requestTimeout,
    });

    client.setHeaders(ODOO_JOBS_HEADERS);

    this.logger.log(
      `Fetching official Odoo jobs (resultsWanted=${resultsWanted})`,
    );
    this.logger.debug(
    `Odoo searchTerm="${input.searchTerm ?? ''}"`,
  );
    try {
      const response = await client.get(ODOO_JOBS_URL, {
        params: {
          all_countries: 1,
          search: input.searchTerm,
          order: 'name asc',
        },
      });
      const html = response.data;

      if (!html || typeof html !== 'string') {
        this.logger.warn('Odoo Jobs returned empty or invalid HTML');

        return new JobResponseDto([]);
      }

      const parsedJobs = this.parseJobs(html);

      this.logger.log(
        `Odoo Jobs: parsed ${parsedJobs.length} technical vacancies`,
      );

      const jobs = parsedJobs
        .slice(0, resultsWanted)
        .map(job =>
          this.mapJob(
            job,
            input.descriptionFormat,
          ),
        );

      this.logger.log(`Odoo Jobs returned ${jobs.length} jobs`);

      return new JobResponseDto(jobs);
    } catch (error: unknown) {
      const message =
        error instanceof Error
          ? error.message
          : String(error);

      this.logger.error(`Odoo Jobs scrape failed: ${message}`);

      return new JobResponseDto([]);
    }
  }

  /**
   * Parses technical developer vacancies from the official Odoo jobs page.
   *
   * Odoo's search for "developer" also returns commercial roles such as
   * "Business Developer", so every title is additionally checked using
   * isTechnicalDeveloperJob().
   */
  private parseJobs(html: string): OdooJob[] {
  const $ = cheerio.load(html);

  this.logger.debug(
  `Odoo HTML size: ${html.length}`,
  );

  this.logger.debug(
  `Odoo /jobs/ links found: ${$('a[href*="/jobs/"]').length}`,
  );
  $('a[href*="/jobs/"]').each((_, element) => {
  const link = $(element);

  this.logger.debug(
    `Odoo link: href="${link.attr('href')}" text="${this.normalizeWhitespace(link.text())}"`,
  );
});
  const jobs: OdooJob[] = [];
  const processedUrls = new Set<string>();

  $('a[href*="/jobs/"]').each((_, element) => {
    const link = $(element);

    const href = link.attr('href')?.trim();

    if (!href) {
      return;
    }

    const jobUrl = this.createAbsoluteUrl(href);

    if (!jobUrl || processedUrls.has(jobUrl)) {
      return;
    }

    /*
     * Ignore the general /jobs page and non-vacancy links.
     */
    try {
      const url = new URL(jobUrl);

      if (
        url.pathname === '/jobs' ||
        url.pathname === '/jobs/'
      ) {
        return;
      }
    } catch {
      return;
    }

    /*
     * Odoo changes listing-page markup from time to time,
     * therefore do not rely on one specific CSS class.
     */
    const title = this.normalizeWhitespace(
      link.find('h1, h2, h3, h4').first().text() ||
      link.attr('title') ||
      link.text(),
    );

    if (!title) {
      return;
    }

    if (!this.isTechnicalDeveloperJob(title)) {
      return;
    }

    processedUrls.add(jobUrl);

    /*
     * Try several possible containers around the vacancy link.
     */
    const card =
      link.closest(
        'article, .card, .row, [class*="job"], [class*="position"]',
      ).first();

    const container = card.length ? card : link;

    const description = this.normalizeWhitespace(
      container
        .find(
          'p, [class*="description"], [class*="summary"]',
        )
        .first()
        .text(),
    ) || undefined;

    const location =
      this.normalizeWhitespace(
        container
          .find(
            '[itemprop="streetAddress"], [itemprop="addressLocality"], [class*="location"]',
          )
          .first()
          .text(),
      ) || undefined;

    jobs.push({
      id: `odoo-${this.extractJobId(jobUrl)}`,
      title,
      jobUrl,
      description,
      location,
    });
  });

  return jobs;
}

  /**
   * Odoo search results may include roles such as "Business Developer".
   * We only keep software-development and engineering vacancies.
   */
  private isTechnicalDeveloperJob(title: string): boolean {
    const normalizedTitle = this.normalizeForSearch(title);

    const excludedMarkers = [
      'business developer',
      'business development',
      'sales developer',
      'sales development',
      'business development representative',
      'account executive',
      'sales representative',
      'partnership developer',
      'partner development',
      'horeca',
    ];

    const isExcluded = excludedMarkers.some(marker =>
      normalizedTitle.includes(marker),
    );

    if (isExcluded) {
      return false;
    }

    const technicalMarkers = [
      'odoo developer',
      'odoo experience developer',
      'backend developer',
      'back end developer',
      'frontend developer',
      'front end developer',
      'fullstack developer',
      'full stack developer',
      'software developer',
      'python developer',
      'web developer',
      'mobile developer',
      'application developer',
      'app developer',
      'ai developer',
      'machine learning developer',

      'backend engineer',
      'back end engineer',
      'frontend engineer',
      'front end engineer',
      'fullstack engineer',
      'full stack engineer',
      'software engineer',
      'platform engineer',
      'devops engineer',
      'data engineer',
      'machine learning engineer',
      'ai engineer',

      'software development intern',
      'software developer intern',
      'developer internship',
      'development internship',
      'software development trainee',
      'graduate software developer',

      'розробник',
      'програміст',
      'інженер програмного забезпечення',

      'разработчик',
      'программист',
      'инженер програмного обеспечения',
    ];

    return technicalMarkers.some(marker =>
      normalizedTitle.includes(marker),
    );
  }

  private mapJob(
    parsedJob: OdooJob,
    descriptionFormat?: DescriptionFormat,
  ): JobPostDto {
    /*
     * The listing-page description has already been converted to plain text.
     * Therefore, it is returned as plain text for every requested format.
     * We can add full vacancy-page HTML fetching later if needed.
     */
    const description =
      descriptionFormat === DescriptionFormat.PLAIN
        ? parsedJob.description
        : parsedJob.description;

    return new JobPostDto({
      id: parsedJob.id,
      title: parsedJob.title,
      jobUrl: parsedJob.jobUrl,
      companyName: 'Odoo',
      description,
      compensation: undefined,

      /*
       * JobPostDto expects LocationDto rather than a raw string.
       * The parsed location remains available in OdooJob for future mapping.
       */
      location: null,

      datePosted: undefined,
      isRemote: this.checkRemote(parsedJob),
      emails: extractEmails(description ?? null),
      site: Site.ODOO_JOBS,
    });
  }

  private checkRemote(job: OdooJob): boolean {
    const text = this.normalizeForSearch(
      [
        job.title,
        job.description ?? '',
        job.location ?? '',
      ].join(' '),
    );

    const remoteMarkers = [
      'remote',
      'fully remote',
      'full remote',
      'remote position',
      'remote work',
      'work remotely',
      'remotely',

      'віддалено',
      'віддалена робота',
      'дистанційно',

      'удаленно',
      'удаленная работа',
      'дистанционно',

      'télétravail',
      'travail à distance',

      'remoto',
      'trabajo remoto',
    ];

    return remoteMarkers.some(marker =>
      text.includes(marker),
    );
  }

  private createAbsoluteUrl(href: string): string | undefined {
    try {
      return new URL(href, ODOO_JOBS_URL).toString();
    } catch {
      this.logger.warn(`Invalid Odoo job URL: ${href}`);

      return undefined;
    }
  }

  private extractJobId(jobUrl: string): string {
    try {
      const url = new URL(jobUrl);

      const segments = url.pathname
        .split('/')
        .filter(Boolean);

      const lastSegment = segments[segments.length - 1];

      if (lastSegment) {
        return lastSegment;
      }

      return this.hashString(jobUrl);
    } catch {
      return this.hashString(jobUrl);
    }
  }

  private normalizeForSearch(value: string): string {
    return this.normalizeWhitespace(value)
      .toLowerCase()
      .replace(
        /[.,;:!?()[\]{}"'`/\\|_-]+/g,
        ' ',
      );
  }

  private normalizeWhitespace(value: string): string {
    return value
      .replace(/\s+/g, ' ')
      .trim();
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