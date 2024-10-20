import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Campaign } from './campaign.entity';
import { User } from 'src/user/user.entity';

@Injectable()
export class CampaignRepository {
  constructor(
    @InjectRepository(Campaign)
    private readonly campaign: Repository<Campaign>,
  ) {}

  async create(name: string, user: User): Promise<Campaign> {
    return await this.campaign.save({ name, user });
  }
}
