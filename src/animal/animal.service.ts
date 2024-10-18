import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Animal } from './entities/animal.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnimalService {
  constructor(@InjectRepository(Animal) private animalRepository: Repository<Animal>) {}


  async create(createAnimalDto: CreateAnimalDto) {
    const newAnimal = this.animalRepository.create(createAnimalDto);
    return this.animalRepository.save(newAnimal);
  }

  findAll() {
    return this.animalRepository.find();
  }
  
  findOne(id: number) {
    return this.animalRepository.findOneBy({id});
  }


  async update(id: number, updateAnimalDto: UpdateAnimalDto) {
    const result = await this.animalRepository.update(id, updateAnimalDto);
    return  this.findOne(id)
  }

  remove(id: number) {
    return this.animalRepository.delete(id);
  }




}
