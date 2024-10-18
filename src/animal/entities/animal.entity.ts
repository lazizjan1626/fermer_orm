import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Entity, PrimaryGeneratedColumn } from "typeorm";


@ObjectType()
@Entity()
export class Animal {

    @Field(()=> ID)
    @PrimaryGeneratedColumn()
    id: number;

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
