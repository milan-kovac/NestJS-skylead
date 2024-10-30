import { BadRequestException, Injectable } from '@nestjs/common';
import { CampaignRepository } from './campaign.repository';
import { CreateCampaignRequestDto } from './dtos/request/create.campaign.dto';
import { User } from '../user/user.entity';
import { Campaign } from './campaign.entity';
import { GetAllCampaignsQueryParams } from './dtos/request/paginaion.query.dto';
import { LogMethod } from '../shared/decorators/log.method.decorator';

@Injectable()
export class CampaignService {
  constructor(private readonly campaignRepository: CampaignRepository) {}

  @LogMethod()
  async createCampaign(createCampaignRequest: CreateCampaignRequestDto, user: User): Promise<Campaign> {
    const { name } = createCampaignRequest;
    return await this.campaignRepository.create(name, user);
  }

  @LogMethod()
  async getCampaign(id: number, user: User): Promise<Campaign> {
    const campaign = await this.campaignRepository.findById(id, user);
    if (!campaign) {
      throw new BadRequestException('Campaign not found.');
    }
    return campaign;
  }

  @LogMethod()
  async getAllCampaigns(user: User, getAllCampaignsQueryParams: GetAllCampaignsQueryParams): Promise<Campaign[]> {
    return await this.campaignRepository.findAll(user, getAllCampaignsQueryParams);
  }
}
