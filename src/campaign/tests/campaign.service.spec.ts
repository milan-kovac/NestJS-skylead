import { ConfigModule } from '@nestjs/config/dist/config.module';
import { Test, TestingModule } from '@nestjs/testing';
import { CampaignService } from '../campaign.service';
import { MockCampaignRepository } from './mocks/mock.campaign.repository';
import { campaignStub, createCampaignStub } from './stub/campaign.stub';
import { adminStub } from '../../user/tests/stub/user.stub';
import { CampaignRepository } from '../campaign.repository';

describe('CampaignService', () => {
  let service: CampaignService;
  let campaignRepository: CampaignRepository;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule],
      providers: [
        CampaignService,
        {
          provide: CampaignRepository,
          useClass: MockCampaignRepository,
        },
      ],
    }).compile();
    service = module.get<CampaignService>(CampaignService);
    campaignRepository = module.get<CampaignRepository>(CampaignRepository);
  });

  describe('createCampaign', () => {
    it('should create a campaign successfully', async () => {
      const result = await service.createCampaign(createCampaignStub, adminStub);
      expect(result).toEqual(campaignStub);
      expect(campaignRepository.create).toHaveBeenCalledWith(createCampaignStub.name, adminStub);
    });
  });
});
