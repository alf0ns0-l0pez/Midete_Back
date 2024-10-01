import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AuthService {
    private readonly saltRounds = 10; // Number of salt rounds for bcrypt
    constructor(
        private jwtService: JwtService,
        private prisma: PrismaService, // Inject Prisma service or database service
    ) { }

    async hashPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(this.saltRounds);
        return bcrypt.hash(password, salt);
    }

    async validateUser(username: string, password: string): Promise<any> {
        // Fetch the user by username from the database
        const user = await this.prisma.users.findMany({
            where: { userName: username },
        });
        if (user && bcrypt.compareSync(password, user[0].pwd)) {
            const { pwd, ...result } = user[0];
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.userName, id: user.id, role:user.role, email: user.email };
        const loginMsg = {
            userName:user.userName,
            email: user.email,
            userId:user.id,
            role:user.role,
            image:user.image,
            accessToken: this.jwtService.sign(payload),
        }
        return loginMsg;
    }

    async register(username: string, password: string, email: string) {
        const hashedPassword = await this.hashPassword(password);
        // Save the user with hashed password to the database
        await this.prisma.users.create({
            data: {
                userName: username,
                pwd: hashedPassword,
                email: email,
                role: "user"
            },
        });
        // Save the user with hashed password logic here
        return { message: 'User registered successfully', hashedPassword: hashedPassword };
    }
}
