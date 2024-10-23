import { Module } from '@nestjs/common';
import { FeedingSchudulesService } from './feeding_schudules.service';
import { FeedingSchudulesController } from './feeding_schudules.controller';

@Module({
  controllers: [FeedingSchudulesController],
  providers: [FeedingSchudulesService],
})
export class FeedingSchudulesModule {}
