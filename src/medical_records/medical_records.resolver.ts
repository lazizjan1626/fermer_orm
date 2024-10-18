import { MedicalRecordsService } from './medical_records.service';
import { CreateMedicalRecordDto } from './dto/create-medical_record.dto';
import { UpdateMedicalRecordDto } from './dto/update-medical_record.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MedicalRecord } from './entities/medical_record.entity';

@Resolver(()=> MedicalRecord)
export class MedicalRecordsResolver {
  constructor(private readonly medicalRecordsService: MedicalRecordsService) {}

  @Mutation(()=> MedicalRecord)
  createMedicalRedord(@Args('createMedical_Record') createMedicalRecordDto: CreateMedicalRecordDto) {
    return this.medicalRecordsService.create(createMedicalRecordDto);
  }

  @Query(()=> [MedicalRecord])
  findAllMedicalRecord() {
    return this.medicalRecordsService.findAll();
  }

  @Query(()=> MedicalRecord)
  findOneMedicalRecord(@Args('id',{ type: () => ID}) id: string) {
    return this.medicalRecordsService.findOne(+id);
  }

  @Mutation(()=> MedicalRecord)
  updateMedical_Record(@Args('id',{ type: () => ID }) id: string, @Args('updateMedical_Record') updateMedicalRecordDto: UpdateMedicalRecordDto) {
    return this.medicalRecordsService.update(+id, updateMedicalRecordDto);
  }

  @Mutation(()=> ID)
  removeMedical_Record(@Args('id',{ type :() => ID} ) id: string) {
    return this.medicalRecordsService.remove(+id);
  }
}
  