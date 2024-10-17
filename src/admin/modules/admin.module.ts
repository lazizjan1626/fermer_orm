import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@ObjectType()
@Entity()
export class Admin {


    @Field(()=> ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field({nullable:true})
    @Column()
    username: string;

    @Field()
    @Column()
    password: string;

    @Field()
    @Column({ nullable: true })
    email: string;

    @Field()
    @Column({ default: true })
    isActive: boolean;
}
