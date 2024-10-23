import { Module } from '@nestjs/common';
import { AnimalCaratacerService } from './animal_caratacer.service';
import { AnimalCaratacerController } from './animal_caratacer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalCaratacer } from './entities/animal_caratacer.entity';

@Module({
  imports:[TypeOrmModule.forFeature([AnimalCaratacer])],
  controllers: [AnimalCaratacerController],
  providers: [AnimalCaratacerService],
})
export class AnimalCaratacerModule {}
