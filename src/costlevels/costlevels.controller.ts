import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { CostLevelsService } from './costlevels.service';
import { CostLevels } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('costlevels')
export class CostLevelsController {
  constructor(private readonly itemsService: CostLevelsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(): Promise<CostLevels[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: number): Promise<CostLevels> {
    return this.itemsService.findOne(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() costLevel: CostLevels): Promise<CostLevels> {
    return this.itemsService.create(costLevel);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: number, @Body() costLevel: CostLevels): Promise<CostLevels> {
    return this.itemsService.update(id, costLevel);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  delete(@Param('id') id: number): Promise<CostLevels> {
    return this.itemsService.delete(id);
  }
}
