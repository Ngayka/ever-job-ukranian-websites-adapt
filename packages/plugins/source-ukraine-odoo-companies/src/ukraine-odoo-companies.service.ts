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
  UKRAINE_ODOO_COMPANIES,
  UKRAINE_ODOO_COMPANIES_HEADERS,
} from './ukraine-odoo-companies.constants';

import {
  UkraineOdooCompanyConfig,
  UkraineOdooCompanyJob,
} from './ukraine-odoo-companies.types';

@SourcePlugin({
  site: Site.UKRAINE_ODOO_COMPANIES,
  name: 'Ukraine Odoo Companies',
  category: 'regional',
})
@Injectable()
export class UkraineOdooCompaniesService implements IScraper {
  private readonly logger = new Logger(
    UkraineOdooCompaniesService.name,
  );

  async scrape(
    input: ScraperInputDto,
  ): Promise<JobResponseDto> {
    const resultsWanted = input.resultsWanted ?? 25;

    const client = createHttpClient({
      proxies: input.proxies,
      caCert: input.caCert,
      timeout: input.requestTimeout,
    });

    client.setHeaders(
      UKRAINE_ODOO_COMPANIES_HEADERS,
    );

    const jobs: JobPostDto[] = [];
    const processedUrls = new Set<string>();

    for (const company of UKRAINE_ODOO_COMPANIES) {
      if (company.enabled === false) {
        continue;
      }

      if (jobs.length >= resultsWanted) {
        break;
      }

      try {
        this.logger.log(
          `Fetching ${company.name}: ${company.careersUrl}`,
        );

        const response = await client.get(
          company.careersUrl,
        );

        const html = response.data;

        if (!html || typeof html !== 'string') {
          this.logger.warn(
            `${company.name}: empty or invalid HTML response`,
          );

          continue;
        }

        const parsedJobs = this.parseCompany(
          company,
          html,
        );

        this.logger.log(
          `${company.name}: parsed ${parsedJobs.length} jobs before filtering`,
        );

        let acceptedJobs = 0;

        for (const parsedJob of parsedJobs) {
          if (jobs.length >= resultsWanted) {
            break;
          }

          if (
            processedUrls.has(parsedJob.jobUrl)
          ) {
            continue;
          }

          processedUrls.add(parsedJob.jobUrl);

          /*
           * Компанії в цьому пакеті вже відібрані як
           * компанії, що працюють з Odoo.
           *
           * Тому тут перевіряємо не наявність слова Odoo,
           * а те, чи є вакансія технічною:
           * developer, engineer, розробник тощо.
           */
          if (!this.isDeveloperJob(parsedJob)) {
            continue;
          }

          jobs.push(
            this.mapJob(
              parsedJob,
              input.descriptionFormat,
            ),
          );

          acceptedJobs++;
        }

        this.logger.log(
          `${company.name}: accepted ${acceptedJobs} developer jobs`,
        );
      } catch (error: unknown) {
        const message =
          error instanceof Error
            ? error.message
            : String(error);

        this.logger.warn(
          `${company.name} scrape failed: ${message}`,
        );
      }
    }

    this.logger.log(
      `Ukraine Odoo Companies returned ${jobs.length} jobs`,
    );

    return new JobResponseDto(jobs);
  }

  /**
   * Parses the careers page of one company.
   */
  private parseCompany(
    company: UkraineOdooCompanyConfig,
    html: string,
  ): UkraineOdooCompanyJob[] {
    const $ = cheerio.load(html);
    const jobs: UkraineOdooCompanyJob[] = [];
    const parsedUrls = new Set<string>();

    $(company.jobSelector).each(
      (_, element) => {
        const jobElement = $(element);

        /*
         * Для ToDo, ERP Ukraine та One Service
         * jobElement є контейнером вакансії.
         *
         * Для EBS і Codoo jobElement може бути
         * безпосередньо тегом <a>.
         */
        const titleElement =
          company.titleSelector
            ? jobElement
                .find(company.titleSelector)
                .first()
            : jobElement;

        const linkElement =
          company.linkSelector
            ? jobElement
                .find(company.linkSelector)
                .first()
            : jobElement;

        const title = this.extractTitle(
          titleElement,
          company,
        );

        const href = this.extractLink(
          linkElement,
          company,
        );

        if (!title || !href) {
          return;
        }

        const jobUrl = this.createAbsoluteUrl(
          href,
          company.careersUrl,
        );

        /*
         * Не додаємо саму сторінку вакансій
         * як окрему вакансію.
         */
        if (
          this.normalizeUrl(jobUrl) ===
          this.normalizeUrl(
            company.careersUrl,
          )
        ) {
          return;
        }

        /*
         * Захист від повторних посилань
         * усередині тієї самої сторінки.
         */
        if (parsedUrls.has(jobUrl)) {
          return;
        }

        parsedUrls.add(jobUrl);

        const description =
          this.extractDescription(
            jobElement,
            company,
          );

        const location =
          this.extractLocation(
            jobElement,
            company,
          );

        const id =
          `${company.id}-${this.extractJobId(
            jobUrl,
          )}`;

        jobs.push({
          id,
          title,
          jobUrl,
          companyName: company.name,
          description,
          location,
        });
      },
    );

    return jobs;
  }

  private extractTitle(
    element: cheerio.Cheerio<any>,
    company: UkraineOdooCompanyConfig,
  ): string {
    if (company.titleAttribute) {
      const attributeValue = element
        .attr(company.titleAttribute)
        ?.trim();

      if (attributeValue) {
        return this.normalizeWhitespace(
          attributeValue,
        );
      }
    }

    return this.normalizeWhitespace(
      element.text(),
    );
  }

  private extractLink(
    element: cheerio.Cheerio<any>,
    company: UkraineOdooCompanyConfig,
  ): string | undefined {
    const linkAttribute =
      company.linkAttribute ?? 'href';

    return element
      .attr(linkAttribute)
      ?.trim();
  }

  private extractDescription(
    element: cheerio.Cheerio<any>,
    company: UkraineOdooCompanyConfig,
  ): string | undefined {
    if (!company.descriptionSelector) {
      return undefined;
    }

    const descriptionElement = element
      .find(company.descriptionSelector)
      .first();

    if (!descriptionElement.length) {
      return undefined;
    }

    const descriptionHtml =
      descriptionElement.html()?.trim();

    if (!descriptionHtml) {
      return undefined;
    }

    const plainText =
      htmlToPlainText(descriptionHtml);

    return plainText
      ? this.normalizeWhitespace(plainText)
      : undefined;
  }

  private extractLocation(
    element: cheerio.Cheerio<any>,
    company: UkraineOdooCompanyConfig,
  ): string | undefined {
    if (!company.locationSelector) {
      return undefined;
    }

    const locationText = element
      .find(company.locationSelector)
      .first()
      .text();

    const normalized =
      this.normalizeWhitespace(locationText);

    return normalized || undefined;
  }

  /**
   * Визначає, чи належить вакансія
   * до технічних ролей розробки.
   */
  private isDeveloperJob(
    job: UkraineOdooCompanyJob,
  ): boolean {
    const text = this.normalizeForSearch(
      [
        job.title,
        job.description ?? '',
      ].join(' '),
    );

    const developerMarkers = [
      'developer',
      'software developer',
      'python developer',
      'backend developer',
      'back end developer',
      'fullstack developer',
      'full stack developer',
      'odoo developer',

      'engineer',
      'software engineer',
      'backend engineer',
      'back end engineer',

      'programmer',

      'розробник',
      'розробниця',
      'python розробник',
      'backend розробник',
      'бекенд розробник',
      'програміст',
      'програмістка',
      'інженер',

      'разработчик',
      'программист',
      'инженер',
    ];

    return developerMarkers.some(
      marker => text.includes(marker),
    );
  }

  private mapJob(
    parsedJob: UkraineOdooCompanyJob,
    descriptionFormat?: DescriptionFormat,
  ): JobPostDto {
    let description =
      parsedJob.description;

    /*
     * У parseCompany опис уже перетворений
     * у plain text.
     *
     * Тому для PLAIN залишаємо його без змін.
     * Для інших форматів також повертаємо plain text,
     * бо HTML-код окремо не зберігаємо.
     */
    if (
      descriptionFormat ===
      DescriptionFormat.PLAIN
    ) {
      description =
        parsedJob.description;
    }

    return new JobPostDto({
      id: parsedJob.id,
      title: parsedJob.title,
      jobUrl: parsedJob.jobUrl,

      companyName:
        parsedJob.companyName,

      description,

      compensation: undefined,

      /*
       * JobPostDto очікує LocationDto,
       * а тут поки зберігається звичайний рядок.
       * Тому залишаємо null до окремого мапінгу.
       */
      location: null,

      datePosted: undefined,

      isRemote:
        this.checkRemote(parsedJob),

      emails: extractEmails(
        description ?? null,
      ),

      site:
        Site.UKRAINE_ODOO_COMPANIES,
    });
  }

  private checkRemote(
    job: UkraineOdooCompanyJob,
  ): boolean {
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
      'remotely',

      'віддалено',
      'тільки віддалено',
      'віддалена робота',
      'дистанційно',

      'удаленно',
      'полностью удаленно',
      'удаленная работа',
    ];

    return remoteMarkers.some(
      marker => text.includes(marker),
    );
  }

  private createAbsoluteUrl(
    href: string,
    baseUrl: string,
  ): string {
    try {
      return new URL(
        href,
        baseUrl,
      ).toString();
    } catch {
      return href;
    }
  }

  private extractJobId(
    jobUrl: string,
  ): string {
    try {
      const url = new URL(jobUrl);

      const segments = url.pathname
        .split('/')
        .filter(Boolean);

      const lastSegment =
        segments[segments.length - 1];

      if (lastSegment) {
        return lastSegment;
      }

      return this.hashString(jobUrl);
    } catch {
      return this.hashString(jobUrl);
    }
  }

  private normalizeUrl(
    value: string,
  ): string {
    try {
      const url = new URL(value);

      return (
        `${url.origin}${url.pathname}`
          .replace(/\/+$/, '')
          .toLowerCase()
      );
    } catch {
      return value
        .replace(/\/+$/, '')
        .toLowerCase();
    }
  }

  private normalizeForSearch(
    value: string,
  ): string {
    return this.normalizeWhitespace(
      value,
    )
      .toLowerCase()
      .replace(
        /[.,;:!?()[\]{}"'`/\\|_-]+/g,
        ' ',
      );
  }

  private normalizeWhitespace(
    value: string,
  ): string {
    return value
      .replace(/\s+/g, ' ')
      .trim();
  }

  private hashString(
    value: string,
  ): string {
    let hash = 0;

    for (
      let index = 0;
      index < value.length;
      index++
    ) {
      const char =
        value.charCodeAt(index);

      hash =
        ((hash << 5) -
          hash +
          char) |
        0;
    }

    return Math.abs(hash).toString(36);
  }
}