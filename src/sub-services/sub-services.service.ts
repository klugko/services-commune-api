import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateSubServiceDto } from './dto/create-sub-service.dto';
import { UpdateSubServiceDto } from './dto/update-sub-service.dto';


@Injectable()
export class SubServicesService {
  constructor(private prisma: PrismaService) {}

  async create(createSubServiceDto: CreateSubServiceDto) {
    return this.prisma.subService.create({
      data: createSubServiceDto,
    });
  }

  async findAll() {
    return this.prisma.subService.findMany({
      where: { status: 'ACTIVE' },
      include: { service: true, feedbacks: true },
    });
  }

  async findOne(id: number) {
    const subService = await this.prisma.subService.findUnique({
      where: { id },
      include: { service: true, feedbacks: true },
    });

    if (!subService) {
      throw new NotFoundException('Sous-service non trouvé');
    }

    return subService;
  }

  async update(id: number, updateSubServiceDto: UpdateSubServiceDto) {
    const subService = await this.prisma.subService.update({
      where: { id },
      data: updateSubServiceDto,
    });

    if (!subService) {
      throw new NotFoundException('Sous-service non trouvé');
    }

    return subService;
  }

  async updateStatus(id: number, status: 'ACTIVE' | 'INACTIVE') {
    const subService = await this.prisma.subService.update({
      where: { id },
      data: { status },
    });

    if (!subService) {
      throw new NotFoundException('Sous-service non trouvé');
    }

    return subService;
  }
}