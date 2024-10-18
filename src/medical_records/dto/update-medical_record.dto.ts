import { PartialType } from '@nestjs/swagger';
import { CreateMedicalRecordDto } from './create-medical_record.dto';
import { Field, InputType } from '@nestjs/graphql';


@InputType()
export class UpdateMedicalRecordDto extends PartialType(CreateMedicalRecordDto) {

    @Field({ nullable: true })
    animal_id?: number;

    @Field({ nullable: true })
    desease_name?: string;

    @Field({ nullable: true })
    treatment?: string;

    @Field({ nullable: true })
    treatment_date?: Date;


}
