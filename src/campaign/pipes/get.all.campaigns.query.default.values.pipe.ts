import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { GetAllCampaignsQueryParams } from '../dtos/request/paginaion.query.dto';

@Injectable()
export class GetAllCampaignsQueryDefaultValuesPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const defaults: GetAllCampaignsQueryParams = {
      limit: 10,
      offset: 0,
      sortBy: 'id',
      order: 'ASC',
    };

    return { ...defaults, ...value };
  }
}