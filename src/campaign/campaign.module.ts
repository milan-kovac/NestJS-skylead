import { Module } from '@nestjs/common';
import { CampaignController } from './campaign.controller';
import { CampaignService } from './campaign.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Campaign } from './campaign.entity';
import { CampaignRepository } from './campaign.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Campaign]), AuthModule],
  controllers: [CampaignController],
  providers: [CampaignService, CampaignRepository],
})
export class CampaignModule {}
