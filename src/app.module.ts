import { Task } from 'src/tasks/entities/task.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';
import { NotesModule } from './notes/notes.module';
import { ArticlesModule } from './articles/articles.module';
import { Note } from './notes/entities/note.entity';
import { Article } from './articles/entities/article.entity';

@Module({
  imports: [
    TasksModule,
    NotesModule,
    UsersModule,
    AuthModule,
    RoleModule,
    ArticlesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql.db.mdbgo.com',
      port: 3306,
      username: 'samfisher1964_nest',
      password: 'SamFisher_1964',
      database: 'samfisher1964_sqlnest',
      entities: [User, Task, Note, Article],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
