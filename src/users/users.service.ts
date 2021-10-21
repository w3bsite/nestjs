import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoleService } from './../role/role.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private readonly roleService: RoleService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    // const role = await this.roleService.findOne(createUserDto.rolename);
    // createUserDto.role = role;
    // return this.usersRepository.save(createUserDto);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find({ relations: ['role'] });
  }

  findOne(username: string): Promise<User> {
    return this.usersRepository.findOne(
      {
        username: username,
      },
      { relations: ['role'] },
    );
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
  async removeAll(): Promise<void> {
    await this.usersRepository.delete({});
  }
}
