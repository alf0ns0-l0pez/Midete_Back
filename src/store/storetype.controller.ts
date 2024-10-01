import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { StoreTypeService } from './storetype.service';
import { StoreType } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('storetype')
export class StoreTypeControler {
  constructor(private readonly itemsService: StoreTypeService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(): Promise<StoreType[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: number): Promise<StoreType> {
    return this.itemsService.findOne(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() storetype: StoreType): Promise<StoreType> {
    return this.itemsService.create(storetype);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: number, @Body() storetype: StoreType): Promise<StoreType> {
    return this.itemsService.update(id, storetype);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  delete(@Param('id') id: number): Promise<StoreType> {
    return this.itemsService.delete(id);
  }
}
