import { InputType, Field } from '@nestjs/graphql';


@InputType()
export class CreateAdminDto {

    @Field({nullable:true})
    username: string;


    @Field()
    password: string;

    @Field()
    email: string;
}
