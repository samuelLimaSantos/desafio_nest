import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import {  User } from '../../users/entities/user.entity'

@Entity()
export class Ranking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true
  })
  position: number;

  @OneToOne(() => User, (user: User) => user.ranking, {
    primary: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: User;
}

