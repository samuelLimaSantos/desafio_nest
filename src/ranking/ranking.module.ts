import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ranking } from './entities/ranking.entity';
import { User } from '../users/entities/user.entity';
import { OrdinateRankService } from './useCases/ordinateRank/ordinateRank.service';
import { OrdinateRankController } from './useCases/ordinateRank/ordinateRank.controller';
import { GetRankService } from './useCases/getRank/getRank.service';
import { GetRankController } from './useCases/getRank/getRank.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Ranking])
  ],
  controllers: [
    OrdinateRankController,
    GetRankController
  ],
  providers: [OrdinateRankService, GetRankService],
})
export class RankingModule {}
