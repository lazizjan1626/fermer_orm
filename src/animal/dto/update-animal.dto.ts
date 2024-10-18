import { PartialType } from '@nestjs/swagger';
import { CreateAnimalDto } from './create-animal.dto';
import { Field, InputType } from '@nestjs/graphql';


@InputType()
export class UpdateAnimalDto extends PartialType(CreateAnimalDto) {

    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    birth_date?: Date;

    @Field({ nullable: true })
    species_id?: number;

    @Field({ nullable: true })
    breads_id?: number;

    @Field({ nullable: true })
    father_id?: number;

    @Field({ nullable: true })
    mother_id?: number;
}
