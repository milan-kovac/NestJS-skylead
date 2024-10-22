import { Body, Controller, Get, Param, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';
import { CampaignService } from './campaign.service';
import { CreateCampaignRequestDto } from './dtos/request/create.campaign.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { User } from 'src/user/user.entity';
import { CurrentUser } from 'src/auth/decorators/current.user.decorator';
import { CreatCampaignResponseDto } from './dtos/response/create.campaign.dto';
import { CreateGenericResponse } from 'src/shared/responses/create.response';
import { AdminCanGuard } from 'src/auth/guards/admin.can.guard';
import { GetCampaignResponseDto } from './dtos/response/get.campaign.dto';

@ApiTags('Campaigns')
@ApiBearerAuth()
@Controller('campaigns')
@UseInterceptors(CacheInterceptor)
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) {}

  @ApiOperation({
    summary: 'Create campaign',
  })
  @ApiBody({ type: CreateCampaignRequestDto })
  @ApiResponse({ type: CreatCampaignResponseDto })
  @UseGuards(AuthGuard, AdminCanGuard)
  @Post()
  async createCampaign(@Body() createCampaignRequest: CreateCampaignRequestDto, @CurrentUser() user: User): Promise<CreatCampaignResponseDto> {
    const campagin = await this.campaignService.createCampaign(createCampaignRequest, user);
    return CreateGenericResponse(campagin);
  }

  @ApiOperation({
    summary: 'Get campaign',
  })
  @ApiResponse({ type: GetCampaignResponseDto })
  @UseGuards(AuthGuard)
  @Get(':id')
  @CacheTTL(600000)
  async getCampaign(@Param('id') id: number, @CurrentUser() user: User): Promise<GetCampaignResponseDto> {
    console.log('GETUJEM', id);
    const campagin = await this.campaignService.getCampaign(id, user);
    return CreateGenericResponse(campagin);
  }
}
