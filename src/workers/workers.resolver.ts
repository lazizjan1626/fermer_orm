import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { WorkersService } from './workers.service';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { Worker } from './models/worker.model';


@Resolver(() => Worker)
export class WorkersResolver {
  constructor(private readonly workersService: WorkersService) {}

  @Mutation(() => Worker)
  createWorker(@Args('createWorker') createWorkerDto: CreateWorkerDto) {
    return this.workersService.create(createWorkerDto);
  }

  @Query(() => [Worker])
  findAllWorkers() {
    return this.workersService.findAll();
  }

  @Query(() => Worker)
  findOneWorker(@Args('id') id: string) {
    return this.workersService.findOne(+id);
  }

  @Mutation(() => Worker)
  updateWorker(
    @Args('id') id: string,
    @Args('updateWorker') updateWorkerDto: UpdateWorkerDto,
  ) {
    return this.workersService.update(+id, updateWorkerDto);
  }

  @Mutation(() => Worker)
  removeWorker(@Args('id') id: string) {
    return this.workersService.remove(+id);
  }
}
