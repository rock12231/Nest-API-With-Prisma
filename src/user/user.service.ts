import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  // Find all users
  async getUsers() {
    return this.prisma.user.findMany();
  }

  // Create a new user
  async createUser(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({ data });
  }

  // Find user by ID
  async getUserById(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  // Update a user
  async updateUser(id: number, data: Prisma.UserUpdateInput) {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  // Delete a user
  async deleteUser(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
