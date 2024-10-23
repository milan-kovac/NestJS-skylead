import { campaignStub } from '../stub/campaign.stub';

export const MockCampaignRepository = jest.fn().mockReturnValue({
  create: jest.fn().mockReturnValue(campaignStub),
});
