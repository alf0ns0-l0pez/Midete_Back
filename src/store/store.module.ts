import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';
import { PrismaModule } from "../prisma.module"

@Module({
  imports: [PrismaModule],
  providers: [StoreService],
  controllers: [StoreController],
})
export class StoreModule {}