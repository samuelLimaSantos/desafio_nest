import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './../../dto/createUserDTO';
import { CreateUserService } from './createUser.service';

@Controller('users')
export class CreateUsersController {
  constructor(
    private createUserService: CreateUserService
  ) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDTO[]) {
    this.createUserService.execute(createUserDto);
  }
}