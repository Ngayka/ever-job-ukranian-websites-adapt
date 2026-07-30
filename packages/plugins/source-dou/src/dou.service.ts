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
import { DOU_RSS_URL, DOU_HEADERS } from './dou.constants';
import { DouRssItem } from './dou.types';

@SourcePlugin({
  site: Site.DOU,
  name: 'Dou',
  category: 'regional',
})
@Injectable()
export class DouService implements IScraper {
  private readonly logger = new Logger(DouService.name);

  async scrape(input: ScraperInputDto): Promise<JobResponseDto> {
    const resultsWanted = input.resultsWanted ?? 25;

    const client = createHttpClient({
      proxies: input.proxies,
      caCert: input.caCert,
      timeout: input.requestTimeout,
    });
    client.setHeaders(DOU_HEADERS);

    this.logger.log(
      `Fetching Dou RSS feed (resultsWanted=${resultsWanted})`,
    );

    try {
      const response = await client.get(DOU_RSS_URL);
      const xml = response.data;

      if (!xml || typeof xml !== 'string') {
        this.logger.warn('Empty or invalid RSS response from Dou');
        return new JobResponseDto([]);
      }

      const items = this.parseRssItems(xml);
      this.logger.log(`Parsed ${items.length} items from Dou RSS feed`);

      const jobs: JobPostDto[] = [];

      for (const item of items) {
        if (jobs.length >= resultsWanted) break;

        try {
          if (input.searchTerm && !this.matchesSearch(item, input.searchTerm)) {
            continue;
          }

          const job = this.mapJob(item, input.descriptionFormat);
          if (job) jobs.push(job);
        } catch (err: any) {
          this.logger.warn(
            `Error mapping Dou job ${item.link}: ${err.message}`,
          );
        }
      }

      this.logger.log(`Dou returned ${jobs.length} jobs`);
      return new JobResponseDto(jobs);
    } catch (err: any) {
      this.logger.error(`Dou scrape error: ${err.message}`);
      return new JobResponseDto([]);
    }
  }

  /**
   * Parse RSS XML into an array of DouRssItem using regex (no XML library).
   */
  private parseRssItems(xml: string): DouRssItem[] {
    const items: DouRssItem[] = [];

    const itemBlocks = xml.split(/<item>/i).slice(1);

    for (const block of itemBlocks) {
      const itemContent = block.split(/<\/item>/i)[0] ?? block;

      items.push({
        title: this.extractTag(itemContent, 'title'),
        link: this.extractTag(itemContent, 'link'),
        guid: this.extractTag(itemContent, 'guid'),
        description: this.extractTag(itemContent, 'description'),
        pubDate: this.extractTag(itemContent, 'pubDate'),
      });
    }

    return items;
  }

  /**
   * Extract the text content of an XML tag using regex.
   * Handles both CDATA-wrapped and plain content.
   */
  private extractTag(xml: string, tagName: string): string | null {
    // Try CDATA first: <tag><![CDATA[content]]></tag>
    const cdataRegex = new RegExp(
      `<${tagName}[^>]*>\\s*<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>\\s*<\\/${tagName}>`,
      'i',
    );
    const cdataMatch = cdataRegex.exec(xml);
    if (cdataMatch) return cdataMatch[1].trim();

    // Try plain content: <tag>content</tag>
    const plainRegex = new RegExp(
      `<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`,
      'i',
    );
    const plainMatch = plainRegex.exec(xml);
    if (plainMatch) return plainMatch[1].trim();

    return null;
  }

  /**
   * Check whether an RSS item matches the given search term.
   */
private matchesSearch(
  item: DouRssItem,
  searchTerm: string,
): boolean {
  const term = searchTerm.trim().toLowerCase();

  const searchableText = [
    item.title,
    item.description,
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

  return searchableText.includes(term);
}

  /**
   * Map a parsed RSS item to a JobPostDto.
   */
private decodeHtmlEntities(value: string): string {
  return value
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

private mapJob(
  item: DouRssItem,
  descriptionFormat?: DescriptionFormat,
): JobPostDto | null {
  if (!item.title || !item.link) return null;

  const parsedTitle = this.parseTitle(item.title);

    let description: string | undefined = item.description ?? undefined;

    if (description) {
      description = this.decodeHtmlEntities(description);

      if (descriptionFormat === DescriptionFormat.PLAIN) {
        description = htmlToPlainText(description);
      } else if (descriptionFormat === DescriptionFormat.MARKDOWN) {
        description = markdownConverter(description) ?? description;
      }
    }

    let datePosted: string | undefined;

  if (item.pubDate) {
    const parsedDate = new Date(item.pubDate);

    if (!Number.isNaN(parsedDate.getTime())) {
      datePosted = parsedDate.toISOString().split('T')[0];
    }
  }

  const jobId = this.extractIdFromUrl(item.guid ?? item.link);

  const isRemote = this.checkRemote(
    item,
    parsedTitle.location,
  );

  return new JobPostDto({
    id: `dou-${jobId}`,
    title: parsedTitle.title,
    jobUrl: item.link,
    description,
    companyName: parsedTitle.companyName,
    compensation: undefined,
    location: parsedTitle.location
  ? new LocationDto({
      city: parsedTitle.location,
    })
  : null,
    datePosted,
    isRemote,
    emails: extractEmails(description ?? null),
    site: Site.DOU,
  });
}

private parseTitle(rawTitle: string): {
  title: string;
  companyName: string | null;
  location: string | null;
} {
  const match = rawTitle.match(
    /^(.*?)\s+в\s+(.+?)(?:,\s*([^,]+))?$/,
  );

  if (!match) {
    return {
      title: rawTitle.trim(),
      companyName: null,
      location: null,
    };
  }

  return {
    title: match[1]?.trim() ?? rawTitle.trim(),
    companyName: match[2]?.trim() ?? null,
    location: match[3]?.trim() ?? null,
  };
}

  /**
   * Check if a job is remote by searching for "remote" in title and description.
   */
  private checkRemote(
  item: DouRssItem,
  location: string | null,
): boolean {
  const text = [
    item.title,
    item.description,
    location,
  ]
    .filter(Boolean)
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
    text.includes(keyword),
  );
}

  /**
   * Extract a short ID from a URL by using the last path segment.
   */
  private extractIdFromUrl(url: string): string {
    try {
      const parsed = new URL(url);
      const segments = parsed.pathname.split('/').filter(Boolean);
      return segments[segments.length - 1] ?? this.hashString(url);
    } catch {
      return this.hashString(url);
    }
  }

  /**
   * Simple string hash for fallback IDs.
   */
  private hashString(str: string): string {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash + char) | 0;
    }
    return Math.abs(hash).toString(36);
  }
}
