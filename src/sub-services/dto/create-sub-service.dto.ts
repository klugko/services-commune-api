import { IsString, IsNotEmpty, IsOptional } from 'class-validator';


export class CreateSubServiceDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  processes: string;

  @IsString()
  @IsNotEmpty()
  requiredDocuments: string;

  @IsOptional()
  status?: 'ACTIVE' | 'INACTIVE';

  @IsNotEmpty()
  serviceId: number;
}