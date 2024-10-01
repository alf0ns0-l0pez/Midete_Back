import { Module } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { ExpensesController } from './expenses.controller';
import { PrismaModule } from "../prisma.module"

@Module({
  imports: [PrismaModule],
  providers: [ExpensesService],
  controllers: [ExpensesController],
})
export class ExpensesModule {}