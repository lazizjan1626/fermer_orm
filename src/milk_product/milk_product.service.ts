import { Injectable } from '@nestjs/common';
import { CreateMilkProductDto } from './dto/create-milk_product.dto';
import { UpdateMilkProductDto } from './dto/update-milk_product.dto';

@Injectable()
export class MilkProductService {
  create(createMilkProductDto: CreateMilkProductDto) {
    return 'This action adds a new milkProduct';
  }

  findAll() {
    return `This action returns all milkProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} milkProduct`;
  }

  update(id: number, updateMilkProductDto: UpdateMilkProductDto) {
    return `This action updates a #${id} milkProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} milkProduct`;
  }
}
