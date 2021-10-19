import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;
  @IsObject()
  @IsOptional()
  Role: unknown;
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
