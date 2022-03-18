import { Controller, Get, Param } from '@nestjs/common';
import {  GetUsersService } from './getUsers.service';

@Controller('users')
export class GetUsersController {
  constructor(private getUsersService: GetUsersService) {}

  @Get(':id')
  async GetUser(@Param('id') userId: number) {
    return await this.getUsersService.execute(userId);
  }
}