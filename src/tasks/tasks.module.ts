import { UsersModule } from './../users/users.module';
import { Task } from 'src/tasks/entities/task.entity';
import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'src/auth/roles.guard';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Task]), AuthModule, UsersModule],
  controllers: [TasksController],
  providers: [
    TasksService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class TasksModule {}
