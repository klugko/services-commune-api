import { IsString, IsNotEmpty, IsOptional } from 'class-validator';


export class CreateFeedbackDto {
  @IsString()
  @IsNotEmpty()
  raison: string;

  @IsOptional()
  status?: 'ACTIVE' | 'INACTIVE';

  @IsOptional()
  subServiceId?: number;
}