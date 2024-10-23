import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FeedingSchudulesService } from './feeding_schudules.service';
import { CreateFeedingSchuduleDto } from './dto/create-feeding_schudule.dto';
import { UpdateFeedingSchuduleDto } from './dto/update-feeding_schudule.dto';

@Controller('feeding-schudules')
export class FeedingSchudulesController {
  constructor(private readonly feedingSchudulesService: FeedingSchudulesService) {}

  @Post()
  create(@Body() createFeedingSchuduleDto: CreateFeedingSchuduleDto) {
    return this.feedingSchudulesService.create(createFeedingSchuduleDto);
  }

  @Get()
  findAll() {
    return this.feedingSchudulesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.feedingSchudulesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFeedingSchuduleDto: UpdateFeedingSchuduleDto) {
    return this.feedingSchudulesService.update(+id, updateFeedingSchuduleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.feedingSchudulesService.remove(+id);
  }
}
