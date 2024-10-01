import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Users } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Users[]> {
    return this.prisma.users.findMany();
  }

  async findOne(id: number): Promise<Users | null> {
    return this.prisma.users.findUnique({
      where: { id },
    });
  }

  async create(data: Users): Promise<Users> {
    return this.prisma.users.create({
      data,
    });
  }

  async update(id: number, data: Partial<Users>): Promise<Users> {
    return this.prisma.users.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Users> {
    return this.prisma.users.delete({
      where: { id },
    });
  }
}
