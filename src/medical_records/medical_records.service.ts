import { Injectable } from '@nestjs/common';
import { CreateMedicalRecordDto } from './dto/create-medical_record.dto';
import { UpdateMedicalRecordDto } from './dto/update-medical_record.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MedicalRecord } from './entities/medical_record.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MedicalRecordsService {

  constructor(@InjectRepository(MedicalRecord) private medicalRecordsRepository: Repository<MedicalRecord>) {}


  async create(createMedicalRecordDto: CreateMedicalRecordDto) {
    const newMedicalRecord = this.medicalRecordsRepository.create(createMedicalRecordDto);
    return this.medicalRecordsRepository.save(newMedicalRecord);
  }

  findAll() {
    return this.medicalRecordsRepository.find();
  }



  findOne(id: number) {
    return this.medicalRecordsRepository.findOneBy({id});
  }

  async update(id: number, updateMedicalRecordDto: UpdateMedicalRecordDto) {
    const result = await this.medicalRecordsRepository.update({id}, updateMedicalRecordDto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.medicalRecordsRepository.delete(id);         
  }
  
}
