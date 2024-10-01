import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from './store/store.module';
import { StoreTypeModule } from './store/storetype.module';
import { PaymentsModule } from './payments/payments.module';
import { CostLevelsModule } from './costlevels/costlevels.module';
import { ExpensesModule } from './expenses/expenses.module';

@Module({
  imports: [
    UsersModule, 
    AuthModule, 
    CategoriesModule,
    StoreModule,
    StoreTypeModule,
    PaymentsModule,
    CostLevelsModule,
    ExpensesModule],
  providers: [PrismaService],
})
export class AppModule {}
