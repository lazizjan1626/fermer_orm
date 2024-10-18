import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateWorkerDto } from './create-worker.dto';

@InputType()
export class UpdateWorkerDto extends PartialType(CreateWorkerDto) {
    @Field(() => Int)
    id: number;

    @Field({ nullable: true })
    name?: string;

    @Field(() => Int, { nullable: true })
    age?: number;

    @Field({ nullable: true })
    experience?: string;

    @Field(() => Int, { nullable: true })
    speciality_id?: number;

    @Field({ nullable: true })
    phone_number?: string;

    @Field({ nullable: true })
    worker_schedule?: string;

    @Field({ nullable: true })
    hashed_token?: string;

    @Field({ nullable: true })
    role_id?: string;
}
