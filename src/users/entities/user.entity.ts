import { Role } from 'src/role/entities/role.entity';
import { Task } from 'src/tasks/entities/task.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @ManyToOne((type) => Role, (role) => role.users)
  role: Role;
  @Column({ default: 'email@gmil.com' })
  email: string;
  @Column({ default: 'firstname' })
  firstName: string;
  @Column({ default: 'lastname' })
  lastName: string;
  @Column({ default: true })
  isActive: boolean;
  @Column()
  password: string;
  @OneToMany((type) => Task, (task) => task.user)
  tasks: Task[];
}
