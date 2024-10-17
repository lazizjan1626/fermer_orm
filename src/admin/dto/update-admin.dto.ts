import { PartialType } from '@nestjs/mapped-types';
import { CreateAdminDto } from './create-admin.dto';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateAdminDto extends PartialType(CreateAdminDto) {
  // ID sifatida string yoki number ishlatishingiz mumkin (bu GraphQL kontekstida string sifatida ishlatiladi)

  @Field({ nullable: true })
  username?: string;

  @Field({ nullable: true })
  password?: string;

  @Field({ nullable: true })
  email?: string;
}
