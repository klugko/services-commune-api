import { Controller, Post, Body, Get, Param, Patch, NotFoundException } from '@nestjs/common';
import { SubServicesService } from './sub-services.service';
import { CreateSubServiceDto } from './dto/create-sub-service.dto';
import { UpdateSubServiceDto } from './dto/update-sub-service.dto';


@Controller('api/v1/sub-services')
export class SubServicesController {
  constructor(private readonly subServicesService: SubServicesService) {}

  @Post()
  create(@Body() createSubServiceDto: CreateSubServiceDto) {
    return this.subServicesService.create(createSubServiceDto);
  }

  @Get()
  findAll() {
    return this.subServicesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const subService = await this.subServicesService.findOne(+id);
    if (!subService) {
      throw new NotFoundException('Sous-service non trouvé');
    }
    return subService;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubServiceDto: UpdateSubServiceDto) {
    return this.subServicesService.update(+id, updateSubServiceDto);
  }

  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body('status') status: 'ACTIVE' | 'INACTIVE') {
    return this.subServicesService.updateStatus(+id, status);
  }
}