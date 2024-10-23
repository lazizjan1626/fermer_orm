import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnimalCaratacerService } from './animal_caratacer.service';
import { CreateAnimalCaratacerDto } from './dto/create-animal_caratacer.dto';
import { UpdateAnimalCaratacerDto } from './dto/update-animal_caratacer.dto';

@Controller('animal-caratacer')
export class AnimalCaratacerController {
  constructor(private readonly animalCaratacerService: AnimalCaratacerService) {}

  @Post()
  create(@Body() createAnimalCaratacerDto: CreateAnimalCaratacerDto) {
    return this.animalCaratacerService.create(createAnimalCaratacerDto);
  }

  @Get()
  findAll() {
    return this.animalCaratacerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animalCaratacerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnimalCaratacerDto: UpdateAnimalCaratacerDto) {
    return this.animalCaratacerService.update(+id, updateAnimalCaratacerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animalCaratacerService.remove(+id);
  }
}
