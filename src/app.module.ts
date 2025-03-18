import { Module } from '@nestjs/common';
import {ServicesController} from './services/services.controller'
import {ServicesService} from './services/services.service'
import { PrismaService } from '../prisma/prisma.service';
import { SubServicesModule } from './sub-services/sub-services.module';
import { SubServicesController } from './sub-services/sub-services.controller';
import { SubServicesService } from './sub-services/sub-services.service';
import { FeedbacksController } from './feebacks/feedbacks.controller';
import { FeedbacksService } from './feebacks/feedbacks.service';


@Module({
  controllers: [ServicesController, SubServicesController, FeedbacksController],
  providers: [ServicesService, SubServicesService, FeedbacksService, PrismaService],
})
export class ServicesModule {}