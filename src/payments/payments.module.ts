import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsControler } from './payments.controller';
import { PrismaModule } from "../prisma.module"

@Module({
  imports: [PrismaModule],
  providers: [PaymentsService],
  controllers: [PaymentsControler],
})
export class PaymentsModule {}