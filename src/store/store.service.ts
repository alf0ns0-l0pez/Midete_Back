import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Store } from '@prisma/client';

@Injectable()
export class StoreService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Store[]> {
    return this.prisma.store.findMany();
  }

  async findOne(id: number): Promise<Store | null> {
    return this.prisma.store.findUnique({
      where: { id },
    });
  }

  async create(data: Store): Promise<Store> {
    return this.prisma.store.create({
      data,
    });
  }

  async update(id: number, data: Partial<Store>): Promise<Store> {
    return this.prisma.store.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Store> {
    return this.prisma.store.delete({
      where: { id },
    });
  }
}
