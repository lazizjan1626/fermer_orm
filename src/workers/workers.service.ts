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
    return this.workerRepository.findOneBy({ id }).then(worker => {
        if (!worker) {
            throw new Error(`Worker with ID ${id} not found`);
        }
        return worker;
    });
}


update(id: number, updateWorkerDto: UpdateWorkerDto) {
    return this.workerRepository.update(id, updateWorkerDto).then(result => {
        if (result.affected === 0) {
            throw new Error(`Worker with ID ${id} not found`);
        }
        return result;
    });
}


remove(id: number) {
  return this.workerRepository.delete(id).then(result => {
      if (result.affected === 0) {
          throw new Error(`Worker with ID ${id} not found`);
      }
      return result;
  });
}

}
