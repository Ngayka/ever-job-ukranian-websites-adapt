import { Test, TestingModule } from '@nestjs/testing';
import {
  OdooJobsModule,
  OdooJobsService,
} from '@ever-jobs/source-odoo-jobs';
import {
  JobResponseDto,
  ScraperInputDto,
  Site,
} from '@ever-jobs/models';

describe('OdooJobsService (E2E)', () => {
  let service: OdooJobsService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [OdooJobsModule],
    }).compile();

    service = module.get<OdooJobsService>(OdooJobsService);
  });

  it('returns a job response while the parser scaffold is empty', async () => {
    const input = new ScraperInputDto({
      siteType: [Site.ODOO_JOBS],
      searchTerm: 'developer',
      resultsWanted: 5,
      requestTimeout: 5,
    });

    const response: JobResponseDto = await service.scrape(input);

    expect(response).toBeDefined();
    expect(response).toBeInstanceOf(JobResponseDto);
    expect(Array.isArray(response.jobs)).toBe(true);

    response.jobs.forEach(job => {
      expect(job.id).toBeDefined();
      expect(job.title).toBeDefined();
      expect(job.jobUrl).toBeDefined();
      expect(job.companyName).toBe('Odoo');
      expect(job.site).toBe(Site.ODOO_JOBS);
    });
  });
});
