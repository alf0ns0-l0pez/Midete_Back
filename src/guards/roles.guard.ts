import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRole = this.reflector.get<string>('role', context.getHandler());
    if (!requiredRole) {
      return true; // Allow access if no specific role is required
    }

    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException('No token provided');
    }

    const token = authHeader.split(' ')[1]; // Extract token from 'Bearer <token>'
    try {
      const decoded = this.jwtService.verify(token); // Decode and verify token
      request.user = decoded; // Attach decoded token to request
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }

    // Check if the user's role matches the required role
    return request.user?.role === requiredRole;
  }
}
