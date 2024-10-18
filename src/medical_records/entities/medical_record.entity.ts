import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Entity, PrimaryGeneratedColumn } from "typeorm";


@ObjectType()
@Entity()
export class MedicalRecord {

    @Field(()=> ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    animal_id:number;

    @Field()
    desease_name:string;


    @Field()
    treatment:string;

    @Field()
    treatment_date:Date;

}
