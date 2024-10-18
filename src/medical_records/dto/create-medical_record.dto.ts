import { Field, InputType } from "@nestjs/graphql";


@InputType()
export class CreateMedicalRecordDto {
    @Field()
    animal_id:number;

    @Field()
    desease_name:string;


    @Field()
    treatment:string;

    @Field()
    treatment_date:Date;
}
