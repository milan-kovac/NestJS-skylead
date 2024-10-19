import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Campaign } from './campaign.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CampaignRepository {
  constructor(
    @InjectRepository(Campaign)
    private readonly campaign: Repository<Campaign>,
  ) {}
}
