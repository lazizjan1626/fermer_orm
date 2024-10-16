import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Worker {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    aga:number;

    @Column()
    experience:string;

    @Column()
    speciality_id:number;

    @Column()
    phone_number:string;
    
    @Column()
    worker_schedule:string;

    @Column()
    hashed_token:string;



}
