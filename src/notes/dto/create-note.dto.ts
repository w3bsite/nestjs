import { IsOptional, IsString } from 'class-validator';
export class CreateNoteDto {
  @IsString()
  title: string;
  @IsOptional()
  subject: string;
  @IsOptional()
  content: string;
}
