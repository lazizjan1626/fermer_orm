import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateWorkerDto {
    @Field()
    name: string;

    @Field(() => Int)
    age: number;

    @Field()
    experience: string;

    @Field({ nullable: true })
    speciality_id?: number;

    @Field()
    phone_number: string;

    @Field({ nullable: true })
    worker_schedule?: string;

    @Field({ nullable: true })
    hashed_token?: string;

    @Field({ nullable: true })
    role_id?: string;
}
