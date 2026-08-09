import { Module } from '@nestjs/common';
import { UkraineOdooCompaniesService } from './ukraine-odoo-companies.service';

@Module({
  providers: [UkraineOdooCompaniesService],
  exports: [UkraineOdooCompaniesService],
})
export class UkraineOdooCompaniesModule {}