import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Ranking } from './../ranking/entities/ranking.entity';
import { GetUsersService } from './useCases/getUsers/getUsers.service';
import { GetUsersController } from './useCases/getUsers/getUsers.controller';
import { CreateUserService } from './useCases/createUsers/createUser.service';
import { CreateUsersController } from './useCases/createUsers/createUser.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Ranking])
  ],
  controllers: [
    CreateUsersController,
    GetUsersController,
  ],
  providers: [
    CreateUserService,
    GetUsersService
  ],
})
export class UsersModule {}
