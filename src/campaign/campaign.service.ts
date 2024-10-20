import { Injectable } from '@nestjs/common';
import { CampaignRepository } from './campaign.repository';
import { CreateCampaignRequestDto } from './dtos/request/create.campaign.dto';
import { User } from 'src/user/user.entity';
import { Campaign } from './campaign.entity';

@Injectable()
export class CampaignService {
  constructor(private readonly campaignRepository: CampaignRepository) {}

  async createCampaign(createCampaignRequest: CreateCampaignRequestDto, user: User): Promise<Campaign> {
    const { name } = createCampaignRequest;
    return await this.campaignRepository.create(name, user);
  }
}
