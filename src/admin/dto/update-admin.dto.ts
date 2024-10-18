import { PartialType } from '@nestjs/mapped-types';
import { CreateAdminDto } from './create-admin.dto';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateAdminDto extends PartialType(CreateAdminDto) {

  @Field({ nullable: true })
  username?: string;

  @Field({ nullable: true })
  password?: string;

  @Field({ nullable: true })
  email?: string;
}
