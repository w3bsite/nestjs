import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  userName: string;
  @IsString()
  firstName: string;
  @IsEmail()
  email: string;
  @IsString()
  lastName: string;
  @IsBoolean()
  isActive: boolean;
  @IsNotEmpty()
  @IsString()
  password: string;
  tasks: number[];
}
