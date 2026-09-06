import { SourcePlugin } from '@ever-jobs/plugin';

import { Injectable, Logger } from '@nestjs/common';
import {
  IScraper,
  ScraperInputDto,
  JobResponseDto,
  JobPostDto,
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
  REMOTEFIRSTJOBS_API_URL,
  REMOTEFIRSTJOBS_HEADERS,
  REMOTEFIRSTJOBS_MAX_PAGE,
} from './remotefirstjobs.constants';

import {
  RemotefirstjobsApiJob,
  RemotefirstjobsApiResponse,
} from './remotefirstjobs.types';

@SourcePlugin({
  site: Site.REMOTEFIRSTJOBS,
  name: 'RemoteFirstJobs',
  category: 'remote',
})
@Injectable()
export class RemotefirstjobsService implements IScraper {
  private readonly logger = new Logger(RemotefirstjobsService.name);

  async scrape(input: ScraperInputDto): Promise<JobResponseDto> {
    const resultsWanted = input.resultsWanted ?? 25;

    const client = createHttpClient({
      proxies: input.proxies,
      caCert: input.caCert,
      timeout: input.requestTimeout,
    });

    client.setHeaders(REMOTEFIRSTJOBS_HEADERS);

    const jobs: JobPostDto[] = [];

    try {
      for (let page = 0; page <= REMOTEFIRSTJOBS_MAX_PAGE; page++) {
        if (jobs.length >= resultsWanted) {
          break;
        }

        this.logger.log(
          `Fetching RemoteFirstJobs API: query="${input.searchTerm ?? ''}", page=${page}`,
        );

        const response = await client.get(REMOTEFIRSTJOBS_API_URL, {
          params: {
            query: input.searchTerm ?? '',
            page,
          },
        });

        const data = response.data as RemotefirstjobsApiResponse;

        const apiJobs = data.jobs ?? [];

        this.logger.log(
          `RemoteFirstJobs API page ${page}: received ${apiJobs.length} jobs`,
        );

        if (apiJobs.length === 0) {
          break;
        }

        for (const item of apiJobs) {
          if (jobs.length >= resultsWanted) {
            break;
          }

          try {
            if (!this.matchesLocation(item, input.location)) {
              continue;
            }

            const job = this.mapJob(item, input.descriptionFormat);

            if (job) {
              jobs.push(job);
            }
          } catch (err: any) {
            this.logger.warn(
              `Error mapping RemoteFirstJobs job ${item.url}: ${err.message}`,
            );
          }
        }
      }

      this.logger.log(`RemoteFirstJobs returned ${jobs.length} jobs`);

      return new JobResponseDto(jobs);
    } catch (err: any) {
      this.logger.error(`RemoteFirstJobs scrape error: ${err.message}`);
      return new JobResponseDto([]);
    }
  }

  private matchesLocation(
    item: RemotefirstjobsApiJob,
    requestedLocation?: string,
  ): boolean {
    if (!requestedLocation) {
      return true;
    }

    const requested = requestedLocation.trim().toLowerCase();

    if (!requested) {
      return true;
    }

    const locations = item.locations ?? [];

    if (locations.length === 0) {
      return false;
    }

    return locations.some(
      (location) => location.toLowerCase() === requested,
    );
  }

  private mapJob(
    item: RemotefirstjobsApiJob,
    descriptionFormat?: DescriptionFormat,
  ): JobPostDto | null {
    if (!item.title || !item.url) {
      return null;
    }

    let description: string | undefined =
      item.description || undefined;

    if (description) {
      if (descriptionFormat === DescriptionFormat.PLAIN) {
        description = htmlToPlainText(description);
      } else if (descriptionFormat === DescriptionFormat.MARKDOWN) {
        description =
          markdownConverter(description) ?? description;
      }
    }

    let datePosted: string | undefined;

    if (item.published_at) {
      try {
        datePosted = new Date(item.published_at)
          .toISOString()
          .split('T')[0];
      } catch {
        datePosted = undefined;
      }
    }

    let compensation: string | undefined;

    if (item.salary_min || item.salary_max) {
      if (item.salary_min && item.salary_max) {
        compensation = `${item.salary_min} - ${item.salary_max}`;
      } else if (item.salary_min) {
        compensation = `From ${item.salary_min}`;
      } else if (item.salary_max) {
        compensation = `Up to ${item.salary_max}`;
      }
    }

    return new JobPostDto({
      id: `remotefirstjobs-${item.id}`,
      title: item.title,
      companyName: item.company_name || undefined,
      jobUrl: item.url,
      description,
      datePosted,
      isRemote: true,
      emails: extractEmails(description ?? null),
      site: Site.REMOTEFIRSTJOBS,
    });
  }
}