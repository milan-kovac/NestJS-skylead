import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly user: Repository<User>,
  ) {}

  async create(email: string, password: string): Promise<void> {
    await this.user.save({ email, password });
  }

  async getByEmail(email: string): Promise<User> {
    return await this.user.findOneBy({ email });
  }
}
