import { IsString, IsOptional } from 'class-validator';


export class CreateServiceDto {
  @IsString()
  name: string;

  @IsOptional()
  status?: 'ACTIVE' | 'INACTIVE';
}