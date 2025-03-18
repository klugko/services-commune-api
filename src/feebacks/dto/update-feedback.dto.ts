import { IsString, IsOptional } from 'class-validator';


export class UpdateFeedbackDto {
  @IsString()
  @IsOptional()
  raison?: string;

  @IsOptional()
  status?: 'ACTIVE' | 'INACTIVE';
}