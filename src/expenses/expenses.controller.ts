import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { Expenses } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(): Promise<Expenses[]> {
    return this.expensesService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: number): Promise<Expenses> {
    return this.expensesService.findOne(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() expense: Expenses): Promise<Expenses> {
    return this.expensesService.create(expense);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: number, @Body() expense: Expenses): Promise<Expenses> {
    return this.expensesService.update(Number(id), expense);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  delete(@Param('id') id: string): Promise<Expenses> {
    return this.expensesService.delete(Number(id));
  }

  @Post('user/:userId')
  @UseGuards(JwtAuthGuard)
  expensesByUserId(
    @Param('userId') userId: number,  // userId from URL
    @Body() body: { year: number, month: number }, // year and month from request body
  ) {
    const { year, month } = body;
    return this.expensesService.expensesByUserId(Number(userId),year, month);
  }
}
