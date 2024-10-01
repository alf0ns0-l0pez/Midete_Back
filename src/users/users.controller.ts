import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { UserService } from './users.service';
import { Users } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { SetMetadata } from '@nestjs/common';


@Controller('users')
export class UserController {
  constructor(private readonly itemsService: UserService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @UseGuards(RolesGuard)
  @SetMetadata('role', 'admin')
  findAll(): Promise<Users[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: number): Promise<Users> {
    return this.itemsService.findOne(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() users: Users): Promise<Users> {
    return this.itemsService.create(users);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: number, @Body() users: Users): Promise<Users> {
    return this.itemsService.update(id, users);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  delete(@Param('id') id: number): Promise<Users> {
    return this.itemsService.delete(id);
  }
}
