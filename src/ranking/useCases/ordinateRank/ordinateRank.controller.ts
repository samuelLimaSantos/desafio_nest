import { Controller, Post } from '@nestjs/common';
import { OrdinateRankService } from './ordinateRank.service';

@Controller('ranking')
export class OrdinateRankController {
  constructor(
    private ordinateRankService: OrdinateRankService
  ) {}

  @Post()
  async ordinateController() {
    await this.ordinateRankService.execute();
  }
}