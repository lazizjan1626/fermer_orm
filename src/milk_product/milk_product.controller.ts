import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MilkProductService } from './milk_product.service';
import { CreateMilkProductDto } from './dto/create-milk_product.dto';
import { UpdateMilkProductDto } from './dto/update-milk_product.dto';

@Controller('milk-product')
export class MilkProductController {
  constructor(private readonly milkProductService: MilkProductService) {}

  @Post()
  create(@Body() createMilkProductDto: CreateMilkProductDto) {
    return this.milkProductService.create(createMilkProductDto);
  }

  @Get()
  findAll() {
    return this.milkProductService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.milkProductService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMilkProductDto: UpdateMilkProductDto) {
    return this.milkProductService.update(+id, updateMilkProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.milkProductService.remove(+id);
  }
}
