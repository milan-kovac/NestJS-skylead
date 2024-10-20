import { ApiResponseProperty } from '@nestjs/swagger';
import { GenericResponse } from 'src/shared/responses/create.response';
import { CampaignDto } from '../campaign.dto';

export class CreatCampaignResponseDto extends GenericResponse {
  @ApiResponseProperty({
    type: CampaignDto,
  })
  data: CampaignDto;
}
