import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { StoreType } from '@prisma/client';

@Injectable()
export class StoreTypeService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<StoreType[]> {
    return this.prisma.storeType.findMany();
  }

  async findOne(id: number): Promise<StoreType | null> {
    return this.prisma.storeType.findUnique({
      where: { id },
    });
  }

  async create(data: StoreType): Promise<StoreType> {
    return this.prisma.storeType.create({
      data,
    });
  }

  async update(id: number, data: Partial<StoreType>): Promise<StoreType> {
    return this.prisma.storeType.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<StoreType> {
    return this.prisma.storeType.delete({
      where: { id },
    });
  }
}
