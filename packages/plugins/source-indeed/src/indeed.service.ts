import { Injectable, Logger } from '@nestjs/common';
import { SourcePlugin } from '@ever-jobs/plugin';

import {
  IScraper,
  ScraperInputDto,
  JobResponseDto,
  JobPostDto,
  LocationDto,
  CompensationDto,
  DescriptionFormat,
  Country,
  Site,
  getIndeedDomain,
} from '@ever-jobs/models';

import {
  BrowserPool,
  markdownConverter,
  plainConverter,
  extractEmails,
  randomSleep,
} from '@ever-jobs/common';

import { INDEED_HEADERS } from './indeed.constants';
import {
  getJobType,
  getCompensation,
  isJobRemote,
} from './indeed.utils';


@SourcePlugin({
  site: Site.INDEED,
  name: 'Indeed',
  category: 'job-board',
})
@Injectable()
export class IndeedService implements IScraper {
  private readonly logger = new Logger(IndeedService.name);

  private readonly delay = 5;
  private readonly bandDelay = 5;


  async scrape(
    input: ScraperInputDto,
  ): Promise<JobResponseDto> {
    const country =
      input.country ?? Country.USA;

    const {
      subdomain,
      apiCountryCode,
    } = getIndeedDomain(country);

    const resultsWanted =
      input.resultsWanted ?? 15;

    const jobList: JobPostDto[] = [];
    const seenIds = new Set<string>();

    let cursor: string | null = null;
    let page: any = null;

    try {
      /*
       * Important:
       * Use a real Chromium page instead of Axios.
       *
       * We deliberately start without stealth mode.
       * If Indeed serves the normal page, subsequent
       * fetch() calls use the browser session.
       */
      page = await BrowserPool.getPage({
        stealth: false,
        timeout: input.requestTimeout,
      });

      const indeedHome =
        `https://${subdomain}.indeed.com/`;

      this.logger.log(
        `Opening Indeed browser session: ${indeedHome}`,
      );

      const navigationResponse =
        await page.goto(indeedHome, {
          waitUntil: 'domcontentloaded',
          timeout:
            (input.requestTimeout ?? 60) * 1000,
        });

      this.logger.log(
        `Indeed page status: ${
          navigationResponse?.status() ?? 'unknown'
        }`,
      );

      /*
       * Give normal page JavaScript/cookies a moment
       * to initialise.
       */
      await page.waitForTimeout(2000);

      const pageTitle =
        await page.title().catch(() => '');

      this.logger.debug(
        `Indeed page title: ${pageTitle}`,
      );

      /*
       * Detect an obvious Cloudflare block instead of
       * blindly continuing and returning zero results.
       */
      const pageContent =
        await page.content();

      if (
        pageContent.includes(
          'Sorry, you have been blocked',
        )
        || pageContent.includes(
          'Attention Required! | Cloudflare',
        )
      ) {
        this.logger.error(
          'Indeed blocked the browser session with Cloudflare',
        );

        return new JobResponseDto([]);
      }


      while (
        jobList.length < resultsWanted
      ) {
        this.logger.log(
          `Fetching Indeed jobs, cursor: ${
            cursor ?? 'initial'
          }`,
        );

        const query =
          this.buildQuery(
            input,
            cursor,
          );

        this.logger.debug(
          `Indeed GraphQL query:\n${query}`,
        );

        const response =
          await this.fetchGraphql(
            page,
            query,
            apiCountryCode,
          );


        if (!response) {
          this.logger.warn(
            'Indeed GraphQL request returned no usable response',
          );

          break;
        }


        if (response.status !== 200) {
          this.logger.error(
            `Indeed GraphQL HTTP status: ${response.status}`,
          );

          if (response.body) {
            this.logger.error(
              `Indeed GraphQL response: ${response.body.slice(
                0,
                1000,
              )}`,
            );
          }

          break;
        }


        let payload: any;

        try {
          payload =
            JSON.parse(response.body);
        } catch {
          this.logger.error(
            `Indeed returned non-JSON response: ${response.body.slice(
              0,
              1000,
            )}`,
          );

          break;
        }


        if (payload?.errors) {
          this.logger.error(
            `Indeed GraphQL errors: ${JSON.stringify(
              payload.errors,
              null,
              2,
            )}`,
          );
        }


        const data =
          payload?.data?.jobSearch;

        if (!data) {
          this.logger.warn(
            `No jobSearch data in Indeed response: ${JSON.stringify(
              payload,
              null,
              2,
            )}`,
          );

          break;
        }


        const results =
          data.results ?? [];

        cursor =
          data.pageInfo?.nextCursor
          ?? null;


        this.logger.log(
          `Indeed returned ${results.length} results`,
        );


        if (
          results.length === 0
        ) {
          break;
        }


        for (
          const result
          of results
        ) {
          if (
            jobList.length
            >= resultsWanted
          ) {
            break;
          }


          const job =
            result?.job;

          if (!job) {
            continue;
          }


          const jobKey =
            job.key;

          if (!jobKey) {
            continue;
          }


          if (
            seenIds.has(jobKey)
          ) {
            continue;
          }

          seenIds.add(jobKey);


          try {
            const jobPost =
              this.processJob(
                job,
                subdomain,
                input.descriptionFormat,
              );

            if (jobPost) {
              jobList.push(jobPost);
            }
          } catch (error: any) {
            this.logger.warn(
              `Error processing Indeed job ${jobKey}: ${
                error?.message ?? error
              }`,
            );
          }
        }


        if (!cursor) {
          break;
        }


        if (
          jobList.length
          >= resultsWanted
        ) {
          break;
        }


        await randomSleep(
          this.delay * 1000,
          (
            this.delay
            + this.bandDelay
          ) * 1000,
        );
      }
    } catch (error: any) {
      this.logger.error(
        `Indeed scrape error: ${
          error?.message ?? error
        }`,
      );
    } finally {
      if (page) {
        try {
          /*
           * BrowserPool shares Chromium,
           * so close only the page/context,
           * not the whole browser.
           */
          const context =
            page.context();

          await page.close()
            .catch(() => {});

          await context.close()
            .catch(() => {});
        } catch {
          // Non-fatal cleanup failure
        }
      }
    }


    this.logger.log(
      `Indeed scrape finished: ${jobList.length} jobs`,
    );

    return new JobResponseDto(
      jobList,
    );
  }


  private async fetchGraphql(
    page: any,
    query: string,
    apiCountryCode: string,
  ): Promise<{
    status: number;
    body: string;
  } | null> {
    try {
      const apiKey =
        INDEED_HEADERS[
          'indeed-api-key'
        ];

      return await page.evaluate(
        async ({
          graphqlQuery,
          indeedApiKey,
          indeedCountryCode,
        }: {
          graphqlQuery: string;
          indeedApiKey: string;
          indeedCountryCode: string;
        }) => {
          try {
            const response =
              await fetch(
                'https://apis.indeed.com/graphql',
                {
                  method: 'POST',

                  credentials:
                    'include',

                  headers: {
                    accept:
                      'application/json',

                    'content-type':
                      'application/json',

                    'indeed-api-key':
                      indeedApiKey,

                    'indeed-co':
                      indeedCountryCode,
                  },

                  body:
                    JSON.stringify({
                      query:
                        graphqlQuery,
                    }),
                },
              );


            const body =
              await response.text();


            return {
              status:
                response.status,

              body,
            };
          } catch (error: any) {
            return {
              status: 0,

              body:
                error?.message
                ?? String(error),
            };
          }
        },
        {
          graphqlQuery: query,
          indeedApiKey: apiKey,
          indeedCountryCode:
            apiCountryCode,
        },
      );
    } catch (error: any) {
      this.logger.error(
        `Indeed in-browser GraphQL fetch failed: ${
          error?.message ?? error
        }`,
      );

      return null;
    }
  }


  private buildQuery(
    input: ScraperInputDto,
    cursor: string | null,
  ): string {
    const args: string[] = [];


    const searchTerm =
      this.escapeGraphqlString(
        input.searchTerm ?? '',
      );


    if (searchTerm) {
      args.push(
        `what: "${searchTerm}"`,
      );
    }


    const location =
      this.escapeGraphqlString(
        input.location ?? '',
      );


    if (location) {
      const radius =
        input.distance ?? 50;

      args.push(
        `
        location: {
          where: "${location}"
          radius: ${radius}
          radiusUnit: MILES
        }
        `,
      );
    }


    if (cursor) {
      args.push(
        `cursor: "${this.escapeGraphqlString(
          cursor,
        )}"`,
      );
    }


    args.push(
      'sort: DATE',
    );

    args.push(
      'limit: 100',
    );


    return `
      query GetJobData {
        jobSearch(
          ${args.join('\n')}
        ) {
          pageInfo {
            nextCursor
          }

          results {
            trackingKey

            job {
              source {
                name
              }

              key
              title
              dateOnSite
              datePublished

              description {
                html
              }

              location {
                formatted {
                  long
                }

                city
                state
                country
                countryCode
                postalCode
              }

              attributes {
                label
                key
              }

              compensation {
                baseSalary {
                  unitOfWork

                  range {
                    ... on Range {
                      min
                      max
                    }
                  }
                }

                estimated {
                  baseSalary {
                    unitOfWork

                    range {
                      ... on Range {
                        min
                        max
                      }
                    }
                  }
                }

                formattedRange
                currencyCode
              }

              employer {
                dpiUrl
                name

                companyProfile {
                  pageUrl

                  images {
                    squareLogoUrl
                    bannerUrl
                  }

                  description

                  overview {
                    revenue
                    employeeCount
                    industryName
                  }

                  locations
                }

                relatedJobs(
                  limit: 0
                ) {
                  totalCount
                }
              }
            }
          }
        }
      }
    `;
  }


  private escapeGraphqlString(
    value: string,
  ): string {
    return value
      .replace(
        /\\/g,
        '\\\\',
      )
      .replace(
        /"/g,
        '\\"',
      )
      .replace(
        /\r/g,
        ' ',
      )
      .replace(
        /\n/g,
        ' ',
      )
      .trim();
  }


  private processJob(
    job: any,
    subdomain: string,
    format?: DescriptionFormat,
  ): JobPostDto | null {
    const title =
      job.title;

    if (!title) {
      return null;
    }


    const employer =
      job.employer ?? {};

    const companyProfile =
      employer.companyProfile
      ?? {};


    const companyName =
      employer.name
      ?? null;


    const companyUrl =
      companyProfile.pageUrl
        ? this.buildIndeedUrl(
            subdomain,
            companyProfile.pageUrl,
          )
        : null;


    const companyLogo =
      companyProfile.images
        ?.squareLogoUrl
      ?? null;


    const bannerPhotoUrl =
      companyProfile.images
        ?.bannerUrl
      ?? null;


    const companyDescription =
      companyProfile.description
      ?? null;


    const overview =
      companyProfile.overview
      ?? {};


    const companyIndustry =
      overview.industryName
      ?? null;


    const companyNumEmployees =
      overview.employeeCount
      != null
        ? String(
            overview.employeeCount,
          )
        : null;


    const companyRevenue =
      overview.revenue
      ?? null;


    const profileLocations =
      companyProfile.locations;


    const companyAddresses =
      Array.isArray(
        profileLocations,
      )
        ? profileLocations
            .map(
              (
                location: any,
              ) =>
                typeof location
                  === 'string'
                  ? location
                  : (
                      location?.name
                      ?? location?.formatted
                      ?? null
                    ),
            )
            .filter(Boolean)
            .join(', ')
        : null;


    const rawLocation =
      job.location ?? {};


    const location =
      new LocationDto({
        city:
          rawLocation.city
          ?? null,

        state:
          rawLocation.state
          ?? null,

        country:
          rawLocation.country
          ?? rawLocation.countryCode
          ?? null,
      });


    const rawDescription =
      job.description?.html
      ?? null;


    let description =
      rawDescription;


    if (description) {
      if (
        format
        === DescriptionFormat.MARKDOWN
      ) {
        description =
          markdownConverter(
            description,
          )
          ?? description;
      } else if (
        format
        === DescriptionFormat.PLAIN
      ) {
        description =
          plainConverter(
            description,
          )
          ?? description;
      }
    }


    const attributes =
      job.attributes ?? [];


    const jobType =
      getJobType(
        attributes,
      );


    const remote =
      isJobRemote(
        attributes,
      );


    const comp =
      getCompensation(
        job.compensation,
      );


    const compensation =
      comp
        ? new CompensationDto({
            interval:
              comp.interval
              ?? undefined,

            minAmount:
              comp.minAmount,

            maxAmount:
              comp.maxAmount,

            currency:
              comp.currency
              ?? 'USD',
          })
        : null;


    const datePosted =
      job.datePublished
      ?? job.dateOnSite
      ?? null;


    return new JobPostDto({
      id:
        `in-${job.key}`,

      title,

      companyName,

      companyUrl,

      jobUrl:
        `https://${subdomain}.indeed.com/viewjob?jk=${job.key}`,

      location,

      description,

      compensation,

      datePosted:
        this.formatDate(
          datePosted,
        ),

      jobType,

      isRemote:
        remote,

      emails:
        extractEmails(
          description,
        ),

      companyIndustry,

      companyLogo,

      bannerPhotoUrl,

      companyDescription,

      companyNumEmployees,

      companyRevenue,

      companyAddresses,

      site:
        Site.INDEED,
    });
  }


  private buildIndeedUrl(
    subdomain: string,
    pageUrl: string,
  ): string {
    if (
      pageUrl.startsWith(
        'http://',
      )
      || pageUrl.startsWith(
        'https://',
      )
    ) {
      return pageUrl;
    }


    const normalizedPath =
      pageUrl.startsWith('/')
        ? pageUrl
        : `/${pageUrl}`;


    return (
      `https://${subdomain}.indeed.com`
      + normalizedPath
    );
  }


  private formatDate(
    value: unknown,
  ): string | null {
    if (!value) {
      return null;
    }


    const date =
      new Date(
        value as
          | string
          | number
          | Date,
      );


    if (
      Number.isNaN(
        date.getTime(),
      )
    ) {
      this.logger.warn(
        `Invalid Indeed date: ${String(
          value,
        )}`,
      );

      return null;
    }


    return date
      .toISOString()
      .split('T')[0];
  }
}