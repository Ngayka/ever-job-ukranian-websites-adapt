import { Test, TestingModule } from '@nestjs/testing';
import {
  UkraineOdooCompaniesModule,
  UkraineOdooCompaniesService,
} from '@ever-jobs/source-ukraine-odoo-companies';
import {
  DescriptionFormat,
  JobResponseDto,
  ScraperInputDto,
  Site,
} from '@ever-jobs/models';

describe('UkraineOdooCompaniesService (E2E)', () => {
  let service: UkraineOdooCompaniesService;

  const expectJobResponse = (response: JobResponseDto): void => {
    expect(response).toBeInstanceOf(JobResponseDto);
    expect(Array.isArray(response.jobs)).toBe(true);

    response.jobs.forEach(job => {
      expect(job.id).toBeDefined();
      expect(job.title).toBeDefined();
      expect(job.companyName).toBeDefined();
      expect(job.jobUrl).toBeDefined();
      expect(job.site).toBe(Site.UKRAINE_ODOO_COMPANIES);
    });
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UkraineOdooCompaniesModule],
    }).compile();

    service = module.get<UkraineOdooCompaniesService>(
      UkraineOdooCompaniesService,
    );
  });

  it('should return job results', async () => {
    const input = new ScraperInputDto({
      siteType: [Site.UKRAINE_ODOO_COMPANIES],
      resultsWanted: 5,
      descriptionFormat: DescriptionFormat.MARKDOWN,
    });

    const response: JobResponseDto = await service.scrape(input);

    expectJobResponse(response);
  }, 30000);

  it('should respect resultsWanted limit', async () => {
    const input = new ScraperInputDto({
      siteType: [Site.UKRAINE_ODOO_COMPANIES],
      resultsWanted: 3,
      descriptionFormat: DescriptionFormat.PLAIN,
    });

    const response: JobResponseDto = await service.scrape(input);

    expectJobResponse(response);
    expect(response.jobs.length).toBeLessThanOrEqual(3);
  }, 30000);

  it('should handle search term filtering', async () => {
    const input = new ScraperInputDto({
      siteType: [Site.UKRAINE_ODOO_COMPANIES],
      searchTerm: 'developer',
      resultsWanted: 5,
    });

    const response: JobResponseDto = await service.scrape(input);

    expectJobResponse(response);
  }, 30000);
});
