import { Injectable } from '@nestjs/common';
import { CreateAnimalCaratacerDto } from './dto/create-animal_caratacer.dto';
import { UpdateAnimalCaratacerDto } from './dto/update-animal_caratacer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AnimalCaratacer } from './entities/animal_caratacer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnimalCaratacerService {

  constructor(@InjectRepository(AnimalCaratacer) private animalRepo : Repository<AnimalCaratacer>){}

  create(createAnimalCaratacerDto: CreateAnimalCaratacerDto) {
    const newAnimalCaratacer = this.animalRepo.create(createAnimalCaratacerDto);
    return this.animalRepo.save(newAnimalCaratacer);
  }

  findAll() {
    return this.animalRepo.find();
  }

  findOne(id: number) {
    return this.animalRepo.findOneBy({ id });
  }

  async update(id:number,updateAnimalCaratacerDto : UpdateAnimalCaratacerDto){
    const result = await this.animalRepo.update({id}, updateAnimalCaratacerDto);
    return this.findOne(id);
  }


  remove(id: number) {
    return this.animalRepo.delete(id);
  }
}
