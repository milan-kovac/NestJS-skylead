import { ApiResponseProperty } from '@nestjs/swagger';
import { GenericResponse } from 'src/shared/responses/create.response';
import { CampaignDto } from '../campaign.dto';

export class GetCampaignsResponseDto extends GenericResponse {
  @ApiResponseProperty({
    type: CampaignDto,
  })
  data: CampaignDto[];
}
