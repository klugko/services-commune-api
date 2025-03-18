import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import {CreateServiceDto} from './dto/create-service.dto';


@Injectable()
export class ServicesService {
  constructor(private prisma: PrismaService) {}

  async create(createServiceDto: CreateServiceDto) {
    return this.prisma.service.create({
      data: createServiceDto,
    });
  }

  async findAll() {
    return this.prisma.service.findMany({
      where: { status: 'ACTIVE' },
      include: { subServices: true },
    });
  }

  async updateStatus(id: number, status: 'ACTIVE' | 'INACTIVE') {
    return this.prisma.service.update({
      where: { id },
      data: { status },
    });
  }
}