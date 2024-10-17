import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './modules/admin.module';

@Resolver(() => Admin)
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}

  @Mutation(() => Admin)
  createAdmin(@Args('CreateAdmin') createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @Query(() => [Admin])
  findAllAdmin() {
    return this.adminService.findAll();
  }

  @Query(() => Admin)
  findOneAdmin(@Args('id', { type: () => ID }) id: string) {
    return this.adminService.findOne(+id);
  }

  @Query(() => String)
  async findNameAdmin(@Args('id', { type: () => ID }) id: string) {
    const admin = await this.adminService.findOne(+id);
    return admin.username;
  }

  @Mutation(() => Admin)
  updateAdmin(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateAdmin') updateAdminDto: UpdateAdminDto,
  ) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @Mutation(() => ID)
  removeAdmin(@Args('id', { type: () => ID }) id: string) {
    return this.adminService.remove(+id);
  }
}
