import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheModule } from '@nestjs/cache-manager';
import { CampaignController } from './campaign.controller';
import { CampaignService } from './campaign.service';
import { Campaign } from './campaign.entity';
import { CampaignRepository } from './campaign.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [CacheModule.register(), TypeOrmModule.forFeature([Campaign]), AuthModule],
  controllers: [CampaignController],
  providers: [CampaignService, CampaignRepository],
})
export class CampaignModule {}
