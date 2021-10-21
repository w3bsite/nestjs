import { NotesService } from './../notes/notes.service';
import { Article } from './entities/article.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { NotesModule } from 'src/notes/notes.module';
import { Note } from 'src/notes/entities/note.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Article, Note]), NotesModule],
  controllers: [ArticlesController],
  providers: [ArticlesService],
})
export class ArticlesModule {}
