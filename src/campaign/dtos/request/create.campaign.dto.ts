import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCampaignRequestDto {
  @ApiProperty({ required: true, type: String, example: 'Campaign name' })
  @IsString({ message: 'Please provide valid name.' })
  name: string;
}
