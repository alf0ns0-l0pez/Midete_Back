import { Module } from '@nestjs/common';
import { CostLevelsService } from './costlevels.service';
import { CostLevelsController } from './costlevels.controller';
import { PrismaModule } from "../prisma.module"

@Module({
  imports: [PrismaModule],
  providers: [CostLevelsService],
  controllers: [CostLevelsController],
})
export class CostLevelsModule {}