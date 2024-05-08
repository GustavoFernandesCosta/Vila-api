import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { SuperheroEntity } from './superhero.entity';

@Entity({ name: 'colour', schema: 'superhero' })
export class Colour {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20 })
  colour: string;

  @OneToMany(() => SuperheroEntity, (superhero) => superhero.eyeColour)
  superheroesEyeColour: SuperheroEntity[];

  @OneToMany(() => SuperheroEntity, (superhero) => superhero.hairColour)
  superheroesHairColour: SuperheroEntity[];

  @OneToMany(() => SuperheroEntity, (superhero) => superhero.skinColour)
  superheroesSkinColour: SuperheroEntity[];
}
