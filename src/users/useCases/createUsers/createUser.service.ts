import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { CreateUserDTO } from './../../dto/createUserDTO';
import { User } from '../../entities/user.entity';
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CreateUserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  async execute(createUserDto: CreateUserDTO[]) {
    const users = this.usersRepository.create(createUserDto);

    await this.usersRepository.save(users);
  }
}