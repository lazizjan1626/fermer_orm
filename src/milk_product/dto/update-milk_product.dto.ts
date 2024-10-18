import { PartialType } from '@nestjs/swagger';
import { CreateMilkProductDto } from './create-milk_product.dto';

export class UpdateMilkProductDto extends PartialType(CreateMilkProductDto) {}
