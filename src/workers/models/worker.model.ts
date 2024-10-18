import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@ObjectType()
@Entity()
export class Worker {

    @Field(()=> ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field({nullable:true})
    @Column()
    name: string;

    @Field()
    @Column()
    aga:number;

    @Field()
    @Column()
    experience:string;


    @Field()
    @Column()
    speciality_id:number;

    @Field()
    @Column()
    phone_number:string;
    

    @Field()
    @Column()
    worker_schedule:string;
    
    @Field()
    @Column()
    hashed_token:string;



}
