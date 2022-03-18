import { Controller, Get, Query } from '@nestjs/common';
import { GetRankingDTO } from '../../dto/getRankingDTO'
import { GetRankService } from './getRank.service';

@Controller('ranking')
export class GetRankController {
  constructor(
    private getRankService: GetRankService
  ) {}

  @Get()
  list(@Query() getRankingDTO: GetRankingDTO) {
    return this.getRankService.execute(getRankingDTO);
  }

}

