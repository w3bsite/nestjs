import { Role } from 'src/role/entities/role.entity';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;
  @IsString()
  rolename: string;
  @IsOptional()
  role: Role;
  @IsString()
  @IsOptional()
  firstName: string;
  @IsEmail()
  @IsOptional()
  email: string;
  @IsString()
  @IsOptional()
  lastName: string;
  @IsBoolean()
  @IsOptional()
  isActive: boolean;
  @IsNotEmpty()
  @IsString()
  password: string;
}
