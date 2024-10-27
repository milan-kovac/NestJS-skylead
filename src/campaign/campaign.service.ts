import { BadRequestException, Injectable } from '@nestjs/common';
import { CampaignRepository } from './campaign.repository';
import { CreateCampaignRequestDto } from './dtos/request/create.campaign.dto';
import { User } from 'src/user/user.entity';
import { Campaign } from './campaign.entity';
import { GetAllCampaignsQueryParams } from './dtos/request/paginaion.query.dto';

@Injectable()
export class CampaignService {
  constructor(private readonly campaignRepository: CampaignRepository) {}

  async createCampaign(createCampaignRequest: CreateCampaignRequestDto, user: User): Promise<Campaign> {
    const { name } = createCampaignRequest;
    return await this.campaignRepository.create(name, user);
  }

  async getCampaign(id: number, user: User): Promise<Campaign> {
    const campaign = await this.campaignRepository.findById(id, user);
    if (!campaign) {
      throw new BadRequestException('Campaign not found.');
    }
    return campaign;
  }

  async getAllCampaigns(user: User, getAllCampaignsQueryParams: GetAllCampaignsQueryParams): Promise<Campaign[]> {
    return await this.campaignRepository.findAll(user, getAllCampaignsQueryParams);
  }
}
