import { Module } from '@nestjs/common';
import { SubServicesService } from './sub-services.service';
import { SubServicesController } from './sub-services.controller';
import { PrismaService } from '../../prisma/prisma.service';


@Module({
  controllers: [SubServicesController],
  providers: [SubServicesService, PrismaService],
})
export class SubServicesModule {}