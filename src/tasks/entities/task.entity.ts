import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './../../users/entities/user.entity';
@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 200 })
  title: string;
  @Column({ length: 200 })
  content: string;
  @Column({ default: false })
  urgent: boolean;
  @ManyToOne((type) => User, (user) => user.tasks, { cascade: true })
  user: User;
}
