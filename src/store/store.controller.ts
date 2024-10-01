import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { StoreService } from './store.service';
import { Store } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('store')
export class StoreController {
  constructor(private readonly itemsService: StoreService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(): Promise<Store[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: number): Promise<Store> {
    return this.itemsService.findOne(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() store: Store): Promise<Store> {
    return this.itemsService.create(store);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: number, @Body() store: Store): Promise<Store> {
    return this.itemsService.update(id, store);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  delete(@Param('id') id: number): Promise<Store> {
    return this.itemsService.delete(id);
  }
}
