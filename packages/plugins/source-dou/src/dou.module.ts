import { Module } from '@nestjs/common';
import { DouService } from './dou.service';

@Module({
  providers: [DouService],
  exports: [DouService],
})
export class DouModule {}
