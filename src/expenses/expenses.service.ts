import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Expenses } from '@prisma/client';

@Injectable()
export class ExpensesService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Expenses[]> {
    return this.prisma.expenses.findMany();
  }

  async findOne(id: number): Promise<Expenses | null> {
    return this.prisma.expenses.findUnique({
      where: { id },
    });
  }

  async create(data: Expenses): Promise<Expenses> {
    console.log("create")
    return this.prisma.expenses.create({
      data,
    });
  }

  async update(id: number, data: Partial<Expenses>): Promise<Expenses> {
    console.log("update")
    return this.prisma.expenses.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Expenses> {
    return this.prisma.expenses.delete({
      where: { id },
    });
  }

  async expensesByUserId(userId: number, year: number, month: number) {
    console.log("expensesByUserId")
    const startDate = new Date(year, month, 1); // First day of the month
    const endDate = new Date(year, month + 1, 1); // First day of the next month
    return this.prisma.expenses.findMany({
      where: {
        userId: userId,
        expensedAt: {
          gte: startDate, // Greater than or equal to start date
          lt: endDate,    // Less than the first day of the next month
        },
      },
      include: {
        category: true, 
        payment: true, 
        user: true, 
        store: true,
      },
      orderBy:[
        {
          expensedAt:'desc'
        }
      ]
    });
  }
}
