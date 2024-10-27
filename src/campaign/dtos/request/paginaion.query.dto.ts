import { DefaultValuePipe } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsIn, IsInt, IsOptional, IsPositive, IsString, Max } from 'class-validator';
import { CampaignSortByEnum } from 'src/campaign/enums/sort.by.enum';

export class GetAllCampaignsQueryParams {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  @Max(20)
  limit: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  offset: number;

  @IsOptional()
  @IsString()
  @IsIn(Object.values(CampaignSortByEnum))
  sortBy: string;

  @IsOptional()
  @IsIn(['ASC', 'DESC'])
  order: 'ASC' | 'DESC';
}
