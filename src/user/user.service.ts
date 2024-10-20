import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepository } from './user.respository';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(email: string, password: string): Promise<void> {
    try {
      await this.userRepository.create(email, password);
    } catch (error) {
      throw new BadRequestException(error?.code === 'ER_DUP_ENTRY' ? 'Email already exists.' : error);
    }
  }

  async getUserByEmail(email: string): Promise<User> {
    try {
      return await this.userRepository.getByEmail(email);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
