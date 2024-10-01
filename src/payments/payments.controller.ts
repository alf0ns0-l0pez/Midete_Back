import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { Payments } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('payments')
export class PaymentsControler {
  constructor(private readonly itemsService: PaymentsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(): Promise<Payments[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: number): Promise<Payments> {
    return this.itemsService.findOne(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() payment: Payments): Promise<Payments> {
    return this.itemsService.create(payment);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: number, @Body() payment: Payments): Promise<Payments> {
    return this.itemsService.update(id, payment);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  delete(@Param('id') id: number): Promise<Payments> {
    return this.itemsService.delete(id);
  }
}
