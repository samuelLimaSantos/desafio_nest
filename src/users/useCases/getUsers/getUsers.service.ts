import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './../../dto/createUserDTO';
import { User } from '../../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GetUsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async execute(userId: number) {
    return await this.usersRepository
      .createQueryBuilder('user')
      .innerJoin('user.ranking', 'ranking')
      .select(['user', 'ranking.position'])
      .where('user.id = :userId', { userId: +userId })
      .getMany();
  }
}
