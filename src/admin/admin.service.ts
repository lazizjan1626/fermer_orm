import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './modules/admin.module';
@Injectable()
export class AdminService {

  constructor(@InjectRepository(Admin) private adminRepository: Repository<Admin>) {}

  async create(createAdminDto: CreateAdminDto) {
    const newAdmin = this.adminRepository.create(createAdminDto);
    return this.adminRepository.save(newAdmin);
  }

  findAll() {
    return this.adminRepository.find();
  }

  findOne(id: number) {
    return this.adminRepository.findOneBy({ id });
  }

  async findByUsername(username: string): Promise<Admin | undefined> {
    return this.adminRepository.findOne({ where: { username } });
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return this.adminRepository.update(id, updateAdminDto);
  }

  remove(id: number) {
    return this.adminRepository.delete(id);
  }
}
