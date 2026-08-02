import { Module } from '@nestjs/common';
import { HappyMondayService } from './happymonday.service';

@Module({
  providers: [HappyMondayService],
  exports: [HappyMondayService],
})
export class HappyMondayModule {}
