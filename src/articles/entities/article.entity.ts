import { Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;
  title: string;
}
