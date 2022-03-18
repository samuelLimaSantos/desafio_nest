import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Ranking } from './../../entities/ranking.entity';
import { GetRankingDTO } from '../../dto/getRankingDTO';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GetRankService {
  constructor(
    @InjectRepository(Ranking)
    private rankingRepository: Repository<Ranking>
  ) {}

  async execute(getRankingDTO: GetRankingDTO) {
    const rankQuery = this.rankingRepository
      .createQueryBuilder('rank')
      .select('rank.position')
      .innerJoinAndSelect('rank.user','user');

    if (getRankingDTO.numberOfPosition) {
      rankQuery.limit(getRankingDTO.numberOfPosition);
    }

    return await rankQuery.getMany();
  }
}