import { ApiResponseProperty } from '@nestjs/swagger';
import { UserDto } from 'src/user/dtos/user.dto';

export class CampaignDto {
  @ApiResponseProperty({
    type: Number,
    example: 1,
  })
  id: number;

  @ApiResponseProperty({
    type: String,
    example: 'Campaign name.',
  })
  name: string;

  @ApiResponseProperty({
    type: UserDto,
  })
  user: UserDto;

  @ApiResponseProperty({
    type: Date,
    example: '2024-10-20 15:22:27.146908',
  })
  createdAt: Date;

  @ApiResponseProperty({
    type: Date,
    example: '2024-10-20 15:22:27.146908',
  })
  updatedAt: Date;
}
