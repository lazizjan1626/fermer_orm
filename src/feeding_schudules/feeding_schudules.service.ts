import { Injectable } from '@nestjs/common';
import { CreateFeedingSchuduleDto } from './dto/create-feeding_schudule.dto';
import { UpdateFeedingSchuduleDto } from './dto/update-feeding_schudule.dto';

@Injectable()
export class FeedingSchudulesService {
  create(createFeedingSchuduleDto: CreateFeedingSchuduleDto) {
    return 'This action adds a new feedingSchudule';
  }

  findAll() {
    return `This action returns all feedingSchudules`;
  }

  findOne(id: number) {
    return `This action returns a #${id} feedingSchudule`;
  }

  update(id: number, updateFeedingSchuduleDto: UpdateFeedingSchuduleDto) {
    return `This action updates a #${id} feedingSchudule`;
  }

  remove(id: number) {
    return `This action removes a #${id} feedingSchudule`;
  }
}
