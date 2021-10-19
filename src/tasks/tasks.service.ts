import { UsersService } from './../users/users.service';

import { Task } from 'src/tasks/entities/task.entity';
import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
    private readonly usersService: UsersService,
  ) {}
  async create(createTaskDto: CreateTaskDto) {
    const user = await this.usersService.findOne(createTaskDto.userName);
    createTaskDto.user = user;
    return await this.taskRepository.save(createTaskDto);
  }
  findAll(): Promise<Task[]> {
    return this.taskRepository.find({ relations: ['user'] });
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
