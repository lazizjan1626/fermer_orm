import { Module } from '@nestjs/common';
import { WorkersService } from './workers.service';
import { WorkersController } from './workers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Worker } from './models/worker.model';
import { WorkersResolver } from './workers.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Worker]),
  ],
  exports: [WorkersService],
  controllers: [WorkersController],
  providers: [WorkersService,WorkersResolver],
})
export class WorkersModule {}
