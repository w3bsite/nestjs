import { Task } from 'src/tasks/entities/task.entity';
import { Injectable, Delete } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}
  create(createTaskDto: CreateTaskDto) {
    return this.taskRepository.save(createTaskDto);
  }
  findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }
  findOne(id: number): Promise<Task> {
    return this.taskRepository.findOne(id);
  }
  update(id: string, UpdateTaskDto: UpdateTaskDto) {
    return this.taskRepository
      .save({ id: Number(id), ...UpdateTaskDto })
      .then((r) => r);
  }
  Delete() {
    return this.taskRepository.delete({});
  }
}
