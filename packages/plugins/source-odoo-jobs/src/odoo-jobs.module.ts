import { Module } from '@nestjs/common';
import { OdooJobsService } from './odoo-jobs.service';

@Module({
  providers: [OdooJobsService],
  exports: [OdooJobsService],
})
export class OdooJobsModule {}
