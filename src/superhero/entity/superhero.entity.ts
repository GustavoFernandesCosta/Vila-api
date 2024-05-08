import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Gender } from './gender.entity';
import { Colour } from './colour.entity';
import { Race } from './race.entity';
import { Alignment } from './alignment.entity';
import { Publisher } from './publisher.entity';

@Entity({ schema: 'superhero', name: 'superhero' })
export class SuperheroEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 200, nullable: true })
  superhero_name: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  full_name: string;

  @ManyToOne(() => Gender, (gender) => gender.id)
  @JoinColumn({ name: 'gender_id' })
  gender: Gender;

  @ManyToOne(() => Colour, { nullable: true })
  @JoinColumn({ name: 'eye_colour_id' })
  eyeColour: Colour;

  @ManyToOne(() => Colour, { nullable: true })
  @JoinColumn({ name: 'hair_colour_id' })
  hairColour: Colour;

  @ManyToOne(() => Colour, { nullable: true })
  @JoinColumn({ name: 'skin_colour_id' })
  skinColour: Colour;

  @ManyToOne(() => Race, { nullable: true })
  @JoinColumn({ name: 'race_id' })
  race: Race;

  @ManyToOne(() => Publisher, { nullable: true })
  @JoinColumn({ name: 'publisher_id' })
  publisher: Publisher;

  @ManyToOne(() => Alignment, { nullable: true })
  @JoinColumn({ name: 'alignment_id' })
  alignment: Alignment;

  @Column({ nullable: true })
  height_cm: number;

  @Column({ nullable: true })
  weight_kg: number;
}
