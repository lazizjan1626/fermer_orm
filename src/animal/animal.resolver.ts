import { } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Animal } from './entities/animal.entity';

@Resolver(()=>Animal)
export class AnimalResolver {
  constructor(private readonly animalService: AnimalService) {}

  @Mutation(()=> Animal)
  createAnimal(@Args("createAnimal") createAnimalDto: CreateAnimalDto) {
    return this.animalService.create(createAnimalDto);
  }

  @Query(()=>[Animal])
  findAllAnimal() {
    return this.animalService.findAll();
  }

  @Query(()=>Animal)
  findOneAnimal(@Args('id',{ type:() => ID}) id: string) {
    return this.animalService.findOne(+id);
  }

  @Mutation(()=>Animal)
  updateAnimal(@Args('id',{ type:() => ID}) id: string, @Args("updateAnimal") updateAnimalDto: UpdateAnimalDto) {
    return this.animalService.update(+id, updateAnimalDto);
  }

  @Mutation(()=>Animal)
  removeAnimal(@Args('id',{ type:() => ID}) id: string) {
    return this.animalService.remove(+id);
  }
}
