import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsIn, IsInt, IsOptional, IsPositive, IsString } from 'class-validator';
import { CampaignSortByEnum } from 'src/campaign/enums/sort.by.enum';

export class PaginationQueryDTO {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  limit?: number = 4;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @IsPositive()  
  offset?: number = 0;

  @IsOptional()
  @IsString()
  @IsIn(Object.keys(CampaignSortByEnum))
  sortBy?: string = 'id';

  @IsOptional()
  @IsIn(['ASC', 'DESC'])
  order?: 'ASC' | 'DESC' = 'ASC';
}
