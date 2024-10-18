import { Module } from '@nestjs/common';
import { MilkProductService } from './milk_product.service';
import { MilkProductController } from './milk_product.controller';

@Module({
  controllers: [MilkProductController],
  providers: [MilkProductService],
})
export class MilkProductModule {}
