import { PartialType } from '@nestjs/swagger';
import { CreateFeedingSchuduleDto } from './create-feeding_schudule.dto';

export class UpdateFeedingSchuduleDto extends PartialType(CreateFeedingSchuduleDto) {}
