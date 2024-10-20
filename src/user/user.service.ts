import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { UserRepository } from './user.respository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(email: string, password: string) {
    try {
      await this.userRepository.create(email, password);
    } catch (error) {
      throw new BadRequestException(error?.code === 'ER_DUP_ENTRY' ? 'Email already exists.' : error);
    }
  }
}
