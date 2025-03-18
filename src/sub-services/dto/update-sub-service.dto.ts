import { IsString, IsOptional } from 'class-validator';


export class UpdateSubServiceDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  processes?: string;

  @IsString()
  @IsOptional()
  requiredDocuments?: string;

  @IsOptional()
  status?: 'ACTIVE' | 'INACTIVE';
}