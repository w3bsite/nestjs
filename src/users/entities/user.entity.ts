import { Task } from 'src/tasks/entities/task.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  userName: string;
  @Column()
  email: string;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column({ default: true })
  isActive: boolean;
  @Column()
  password: string;
  @OneToMany((type) => Task, (task) => task.user)
  tasks: Task[];
}
