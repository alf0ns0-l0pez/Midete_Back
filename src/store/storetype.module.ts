import { Module } from '@nestjs/common';
import { StoreTypeService } from './storetype.service';
import { StoreTypeControler } from './storetype.controller';
import { PrismaModule } from "../prisma.module"

@Module({
  imports: [PrismaModule],
  providers: [StoreTypeService],
  controllers: [StoreTypeControler],
})
export class StoreTypeModule {}