import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { User } from 'src/users/entities/user.entity';
export class CreateTaskDto {
  @IsString()
  title: string;
  @IsString()
  content: string;
  @IsOptional()
  userId: number;
  @IsOptional()
  userName: string;
  @IsOptional()
  user: User;
  @IsBoolean()
  @IsOptional()
  urgent: boolean;
}
