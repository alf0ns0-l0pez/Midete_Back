import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Categories } from '@prisma/client';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Categories[]> {
    return this.prisma.categories.findMany();
  }

  async findOne(id: number): Promise<Categories | null> {
    return this.prisma.categories.findUnique({
      where: { id },
    });
  }

  async create(data: Categories): Promise<Categories> {
    return this.prisma.categories.create({
      data,
    });
  }

  async update(id: number, data: Partial<Categories>): Promise<Categories> {
    return this.prisma.categories.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Categories> {
    return this.prisma.categories.delete({
      where: { id },
    });
  }
}
