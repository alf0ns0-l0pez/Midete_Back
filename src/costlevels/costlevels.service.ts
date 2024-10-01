import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CostLevels } from '@prisma/client';

@Injectable()
export class CostLevelsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<CostLevels[]> {
    return this.prisma.costLevels.findMany();
  }

  async findOne(id: number): Promise<CostLevels | null> {
    return this.prisma.costLevels.findUnique({
      where: { id },
    });
  }

  async create(data: CostLevels): Promise<CostLevels> {
    return this.prisma.costLevels.create({
      data,
    });
  }

  async update(id: number, data: Partial<CostLevels>): Promise<CostLevels> {
    return this.prisma.costLevels.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<CostLevels> {
    return this.prisma.costLevels.delete({
      where: { id },
    });
  }
}
