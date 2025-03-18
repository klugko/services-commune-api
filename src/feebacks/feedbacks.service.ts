import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';


@Injectable()
export class FeedbacksService {
  constructor(private prisma: PrismaService) {}

  async create(createFeedbackDto: CreateFeedbackDto) {
    return this.prisma.feedback.create({
      data: createFeedbackDto,
    });
  }

  async findAll() {
    return this.prisma.feedback.findMany({
      where: { status: 'ACTIVE' },
      include: { subService: true },
    });
  }

  async findOne(id: number) {
    const feedback = await this.prisma.feedback.findUnique({
      where: { id },
      include: { subService: true },
    });

    if (!feedback) {
      throw new NotFoundException('Feedback non trouvé');
    }

    return feedback;
  }

  async update(id: number, updateFeedbackDto: UpdateFeedbackDto) {
    const feedback = await this.prisma.feedback.update({
      where: { id },
      data: updateFeedbackDto,
    });

    if (!feedback) {
      throw new NotFoundException('Feedback non trouvé');
    }

    return feedback;
  }

  async updateStatus(id: number, status: 'ACTIVE' | 'INACTIVE') {
    const feedback = await this.prisma.feedback.update({
      where: { id },
      data: { status },
    });

    if (!feedback) {
      throw new NotFoundException('Feedback non trouvé');
    }

    return feedback;
  }
}