import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Campaign } from './campaign.entity';
import { User } from 'src/user/user.entity';
import { Role } from 'src/user/enums/role.enum';
import { PaginationQueryDTO } from './dtos/request/paginaion.query.dto';

@Injectable()
export class CampaignRepository {
  constructor(
    @InjectRepository(Campaign)
    private readonly campaign: Repository<Campaign>,
  ) {}

  async create(name: string, user: User): Promise<Campaign> {
    return await this.campaign.save({ name, user });
  }

  async findById(id: number, user: User): Promise<Campaign> {
    const query = this.campaign.createQueryBuilder('campaign').where('campaign.id = :id', { id });
    if (user.role === Role.EDITOR) {
      query.andWhere('campaign.userId = :userId', { userId: user.id });
    }
    return await query.getOne();
  }

  async findAll(user: User, paginationQueryDTO: PaginationQueryDTO): Promise<Campaign[]> {
    const query = this.campaign.createQueryBuilder('campaign');
    if (user.role === Role.EDITOR) {
      query.where('campaign.userId = :userId', { userId: user.id });
    }

    query.addOrderBy(paginationQueryDTO.sortBy, paginationQueryDTO.order);
    query.offset(paginationQueryDTO.offset);
    query.limit(paginationQueryDTO.limit);

    return await query.getMany();
  }
}
