import { Module } from '@nestjs/common';
import { WorkUaService } from './workua.service';

@Module({
  providers: [WorkUaService],
  exports: [WorkUaService],
})
export class WorkUaModule {}
