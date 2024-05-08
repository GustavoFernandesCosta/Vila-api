import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { HeroPower } from './heroPower.entity';

@Entity({ name: 'superpower', schema: 'superhero' })
export class Superpower {
  @PrimaryGeneratedColumn()
  @Column({ type: 'varchar', length: 200, nullable: true })
  powerName: string;

  @OneToMany(() => HeroPower, (heroPower) => heroPower.superpower)
  heroPowers: HeroPower[];
}
