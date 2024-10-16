import { Injectable } from '@nestjs/common';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Worker } from './models/worker.model';
import { Repository } from 'typeorm';

@Injectable()
export class WorkersService {

  constructor(@InjectRepository(Worker) private workerRepository: Repository<Worker>) {}
  create(createWorkerDto: CreateWorkerDto) {
    const newWoerker = this.workerRepository.create(createWorkerDto);
    return this.workerRepository.save(newWoerker);
  }

  findAll() {
    return this.workerRepository.find();
  }

  findOne(id: number) {
    return this.workerRepository.findOneBy({ id });
  }

  update(id: number, updateWorkerDto: UpdateWorkerDto) {
    return this.workerRepository.update(id, updateWorkerDto);
  }

  remove(id: number) {
    return this.workerRepository.delete(id);
  }
}
