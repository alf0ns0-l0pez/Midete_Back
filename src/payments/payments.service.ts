import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Payments } from '@prisma/client';

@Injectable()
export class PaymentsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Payments[]> {
    return this.prisma.payments.findMany();
  }

  async findOne(id: number): Promise<Payments | null> {
    return this.prisma.payments.findUnique({
      where: { id },
    });
  }

  async create(data: Payments): Promise<Payments> {
    return this.prisma.payments.create({
      data,
    });
  }

  async update(id: number, data: Partial<Payments>): Promise<Payments> {
    return this.prisma.payments.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Payments> {
    return this.prisma.payments.delete({
      where: { id },
    });
  }
}
