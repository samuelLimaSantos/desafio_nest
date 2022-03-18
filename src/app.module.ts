import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { RankingModule } from './ranking/ranking.module';
import { Ranking } from './ranking/entities/ranking.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'desafio_nest',
      entities: [User, Ranking],
      synchronize: true,
      logging: true,
    }),
    UsersModule,
    RankingModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
