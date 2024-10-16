import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './modules/admin.module';

@Module({
  imports: [TypeOrmModule.forFeature([Admin])],
  exports: [AdminService],
  controllers: [AdminController],
  providers: [AdminService],
})

export class AdminModule {}
