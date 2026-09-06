import { SourcePlugin } from '@ever-jobs/plugin';
import { Injectable, Logger, OnModuleDestroy } from '@nestjs/common';
import {
  IScraper,
  ScraperInputDto,
  JobResponseDto,
  JobPostDto,
  LocationDto,
  CompensationDto,
  CompensationInterval,
  Site,
  DescriptionFormat,
} from '@ever-jobs/models';
import {
  htmlToPlainText,
  markdownConverter,
  extractEmails,
  randomSleep,
  BrowserPool,
} from '@ever-jobs/common';
import { WELLFOUND_JOBS_URL, WELLFOUND_DELAY_MIN, WELLFOUND_DELAY_MAX } from './wellfound.constants';
import { WellfoundNextData, WellfoundListing } from './wellfound.types';

@SourcePlugin({
  site: Site.WELLFOUND,
  name: 'Wellfound',
  category: 'niche',
})
@Injectable()
export class WellfoundService implements IScraper, OnModuleDestroy {
  private readonly logger = new Logger(WellfoundService.name);

  async scrape(input: ScraperInputDto): Promise<JobResponseDto> {
    const proxy = input.proxies?.[0] ?? undefined;
    const resultsWanted = input.resultsWanted ?? 15;
    let page;

    try {
      page = await BrowserPool.getPage({ proxy });
      const timeoutMs = (input.requestTimeout ?? 30) * 1000;

      const url = new URL(WELLFOUND_JOBS_URL);
      if (input.searchTerm) url.searchParams.set('q', input.searchTerm);

      this.logger.log(`Wellfound: navigating to ${url.toString()}`);
      await page.goto(url.toString(), {
        waitUntil: 'domcontentloaded',
        timeout: timeoutMs,
      });

      // Wait for Next.js hydration
      await this.delay(6000);

      // Extract __NEXT_DATA__ from the page
      const nextDataJson = await page.evaluate(
        `(() => { const s = document.getElementById('__NEXT_DATA__'); return s ? s.textContent : null; })()`,
      ) as string | null;

      this.logger.log(
  `Wellfound: __NEXT_DATA__ ${nextDataJson ? `found (${nextDataJson.length} chars)` : 'NOT found'}`,
      );

      if (!nextDataJson) {
        // TODO: Try alternative extraction (Apollo state, direct DOM parsing)
        this.logger.warn('Wellfound: __NEXT_DATA__ not found — page structure may have changed');
        return new JobResponseDto([]);
      }

      let nextData: WellfoundNextData;
      try {
        nextData = JSON.parse(nextDataJson);
      } catch {
        this.logger.error('Wellfound: failed to parse __NEXT_DATA__ JSON');
        return new JobResponseDto([]);
      }
      const apolloState = nextData.props?.pageProps?.apolloState;

      this.logger.debug(
        `Wellfound: apolloState keys = ${
          apolloState && typeof apolloState === 'object'
            ? Object.keys(apolloState).slice(0, 50).join(', ')
            : 'NONE'
        }`,
      );

      const apollo = nextData.props?.pageProps?.apollo;

      this.logger.debug(
        `Wellfound: apollo keys = ${
          apollo && typeof apollo === 'object'
            ? Object.keys(apollo).slice(0, 50).join(', ')
            : 'NONE'
        }`,
      );
      const apolloData = (apolloState as any)?.data;
      this.logger.debug(
  `Wellfound ROOT_QUERY: ${JSON.stringify(apolloData?.ROOT_QUERY)}`,
      );
      const firstJobKey = Object.keys(apolloData ?? {}).find((key) =>
      key.startsWith('JobListing:'),
        );

if (firstJobKey) {
  this.logger.debug(
    `Wellfound sample ${firstJobKey}: ${JSON.stringify(apolloData[firstJobKey])}`,
  );
}

      this.logger.debug(
        `Wellfound: apolloState.data keys = ${
          apolloData && typeof apolloData === 'object'
            ? Object.keys(apolloData).slice(0, 100).join(', ')
            : 'NONE'
        }`,
      );

      // TODO: Validate the exact path to job listings in __NEXT_DATA__
      // Wellfound may nest listings under different keys depending on the page
      const listings = this.extractListings(nextData);
      this.logger.log(`Wellfound: extracted ${listings.length} listings`);
      if (listings.length === 0) {
        this.logger.warn(
          'Wellfound: zero listings found in __NEXT_DATA__ — data structure may have changed',
        );
      }

      this.logger.log(`Wellfound: found ${listings.length} listings`);

      const jobPosts: JobPostDto[] = [];
      for (const listing of listings) {
        if (jobPosts.length >= resultsWanted) break;

        try {
          const post = this.mapListing(listing, input.descriptionFormat);
          if (post) jobPosts.push(post);
        } catch (err: any) {
          this.logger.debug(`Wellfound: failed to map listing: ${err.message}`);
        }
      }

      return new JobResponseDto(jobPosts);
    } catch (err: any) {
      this.logger.error(`Wellfound scrape failed: ${err.message}`);
      return new JobResponseDto([]);
    } finally {
      if (page) {
        const context = page.context();
        await page.close().catch(() => {});
        await context.close().catch(() => {});
      }
    }
  }

  /**
   * Recursively search __NEXT_DATA__ for arrays that look like job listings.
   * TODO: Pin down exact path after validating against live site.
   */
  private extractListings(nextData: WellfoundNextData): any[] {
  const data = (nextData.props?.pageProps?.apolloState as any)?.data;

  if (!data || typeof data !== 'object') {
    return [];
  }

  return Object.entries(data)
    .filter(([key]) => key.startsWith('JobListing:'))
    .map(([, value]) => {
      const job = value as any;

      const startupRef = job.startup?.__ref;
      const startup = startupRef ? data[startupRef] : null;

      return {
        id: job.id,
        slug: job.slug,
        title: job.title?.trim(),
        companyName:
          startup?.name ??
          startup?.companyName ??
          startup?.displayName ??
          '',
        compensation: job.compensation ?? null,
        locationNames: job.locationNames ?? [],
        acceptedRemoteLocationNames:
          job.acceptedRemoteLocationNames ?? [],
        remote: job.remote ?? false,
        liveStartAt: job.liveStartAt ?? null,
      };
    });
}

  private findListingsDeep(obj: unknown, maxDepth: number): WellfoundListing[] {
    if (maxDepth <= 0 || !obj || typeof obj !== 'object') return [];

    if (Array.isArray(obj)) {
      // Check if this array looks like job listings
      const sample = obj[0];
      if (
        sample &&
        typeof sample === 'object' &&
        'title' in sample &&
        ('company' in sample || 'companyName' in sample)
      ) {
        return obj as WellfoundListing[];
      }
      return [];
    }

    for (const value of Object.values(obj)) {
      const result = this.findListingsDeep(value, maxDepth - 1);
      if (result.length > 0) return result;
    }

    return [];
  }

  private mapListing(
    listing: WellfoundListing,
    format?: DescriptionFormat,
  ): JobPostDto | null {
    if (!listing.title) return null;

    const id = `wellfound-${listing.id}`;
    const companyName = listing.company?.name ?? null;
    const companySlug = listing.company?.slug ?? '';
    const jobSlug = listing.slug ?? String(listing.id);
    const jobUrl = `https://wellfound.com/jobs/${jobSlug}`;

    let description: string | null = null;
    if (listing.description) {
      if (format === DescriptionFormat.HTML) {
        description = listing.description;
      } else if (format === DescriptionFormat.MARKDOWN) {
        description = markdownConverter(listing.description) ?? listing.description;
      } else {
        description = htmlToPlainText(listing.description);
      }
    }

    const locationStr = listing.locations?.[0] ?? null;
    const location = locationStr ? new LocationDto({ city: locationStr }) : null;

    let compensation: CompensationDto | null = null;
    if (listing.compensation?.min != null || listing.compensation?.max != null) {
      compensation = new CompensationDto({
        interval: CompensationInterval.YEARLY,
        minAmount: listing.compensation.min ?? undefined,
        maxAmount: listing.compensation.max ?? undefined,
        currency: listing.compensation.currency ?? 'USD',
      });
    }

    const datePosted = listing.createdAt
      ? new Date(listing.createdAt).toISOString().split('T')[0]
      : null;

    return new JobPostDto({
      id,
      title: listing.title,
      companyName,
      companyLogo: listing.company?.logoUrl ?? null,
      jobUrl,
      location,
      description,
      compensation,
      datePosted,
      isRemote: listing.remote ?? false,
      emails: extractEmails(description),
      site: Site.WELLFOUND,
      skills: listing.skills?.length ? listing.skills : null,
    });
  }

  async onModuleDestroy(): Promise<void> {
    await BrowserPool.close();
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
