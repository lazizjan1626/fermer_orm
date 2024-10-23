import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class AnimalCaratacer {

    @PrimaryGeneratedColumn()
    id: number;


    @Column({nullable: true})
    animel_id:number;

    @Column({nullable: true})
    shalter_id:number;

    @Column({nullable: true})
    caratacer_id:number;


    @Column({nullable: true})
    start_date:Date;


    @Column({nullable: true})
    end_date:Date;

}

