import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../../users/entities/user.entity';
import { Ranking } from './../../entities/ranking.entity';

@Injectable()
export class OrdinateRankService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,

    @InjectRepository(Ranking)
    private rankingRepository: Repository<Ranking>
  ) {}

  async execute() {
    const usersId = await this.usersRepository
      .createQueryBuilder('users')
      .select('users.id', 'user')
      .orderBy('users.score', 'DESC')
      .addOrderBy('users.username', 'ASC')
      .getRawMany();

    await this.rankingRepository
      .createQueryBuilder('rank')
      .delete()
      .execute();

    const rankingListObject = usersId
      .map(({user}, index) => ({ user, position: index + 1 }));

    const rankingList = this.rankingRepository.create(rankingListObject);

    await this.rankingRepository.save(rankingList);
  }
}