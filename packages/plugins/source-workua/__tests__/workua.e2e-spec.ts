/**
 * E2E tests for the Work.ua scraper.
 */
import { Test, TestingModule } from '@nestjs/testing';
import {
  WorkUaModule,
  WorkUaService,
} from '@ever-jobs/source-workua';
import {
  ScraperInputDto,
  Site,
  DescriptionFormat,
} from '@ever-jobs/models';

describe('WorkUaService (E2E)', () => {
  let service: WorkUaService;

  beforeAll(async () => {
    const module: TestingModule =
      await Test.createTestingModule({
        imports: [WorkUaModule],
      }).compile();

    service = module.get<WorkUaService>(
      WorkUaService,
    );
  });

  it('should return job results', async () => {
    const input = new ScraperInputDto({
      siteType: [Site.WORKUA],
      searchTerm: 'developer',
      resultsWanted: 5,
      descriptionFormat:
        DescriptionFormat.MARKDOWN,
    });

    const response = await service.scrape(input);

    expect(response).toBeDefined();
    expect(response.jobs).toBeDefined();
    expect(Array.isArray(response.jobs)).toBe(
      true,
    );

    if (response.jobs.length > 0) {
      const job = response.jobs[0];

      expect(job.title).toBeDefined();
      expect(typeof job.title).toBe('string');
      expect(job.site).toBe(Site.WORKUA);
      expect(job.id).toMatch(/^workua-/);
      expect(job.jobUrl).toContain(
        'https://www.work.ua/jobs/',
      );
    }
  }, 30000);

  it('should respect resultsWanted limit', async () => {
    const input = new ScraperInputDto({
      siteType: [Site.WORKUA],
      searchTerm: 'developer',
      resultsWanted: 3,
      descriptionFormat:
        DescriptionFormat.PLAIN,
    });

    const response = await service.scrape(input);

    expect(response).toBeDefined();
    expect(response.jobs.length).toBeLessThanOrEqual(
      3,
    );
  }, 30000);

  it('should handle a search term', async () => {
    const input = new ScraperInputDto({
      siteType: [Site.WORKUA],
      searchTerm: 'python developer',
      resultsWanted: 5,
    });

    const response = await service.scrape(input);

    expect(response).toBeDefined();
    expect(response.jobs).toBeDefined();
    expect(Array.isArray(response.jobs)).toBe(
      true,
    );

    for (const job of response.jobs) {
      expect(job.site).toBe(Site.WORKUA);
      expect(job.id).toMatch(/^workua-/);
    }
  }, 30000);
});