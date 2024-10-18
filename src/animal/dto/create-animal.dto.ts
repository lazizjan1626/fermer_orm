import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateAnimalDto {

    @Field({nullable:true})
    name: string;

    @Field()
    birth_date: Date;

    @Field()
    species_id: number;

    @Field()
    breads_id: number;

    @Field()
    father_id: number;

    @Field()
    mother_id: number;
}
