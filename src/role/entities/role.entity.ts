import { User } from 'src/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, OneToMany, Column } from 'typeorm';
@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  user: string;
  @Column()
  Admin: string;
  @OneToMany((type) => User, (user) => user.role)
  users: User[];
}
