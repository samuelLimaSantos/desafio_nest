import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Ranking } from './../../ranking/entities/ranking.entity';


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  score: number;

  @OneToOne(() => Ranking, (ranking) => ranking.user)
  ranking: Ranking;
}



