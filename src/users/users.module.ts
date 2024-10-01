import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UserController } from './users.controller';
import { PrismaModule } from "../prisma.module"
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule,
    JwtModule.register({
      secret: process.env.TOKEN_KEY,
      signOptions: { expiresIn: process.env.TOKEN_LIFE_CYCLE },
    }),
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UsersModule {}
