import { PartialType } from '@nestjs/swagger';
import { CreateAnimalCaratacerDto } from './create-animal_caratacer.dto';

export class UpdateAnimalCaratacerDto extends PartialType(CreateAnimalCaratacerDto) {}
