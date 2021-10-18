import { IsBoolean, IsString } from 'class-validator';
export class CreateTaskDto {
  @IsString()
  title: string;
  @IsString()
  content: string;
  @IsBoolean()
  urgent: boolean;
}
