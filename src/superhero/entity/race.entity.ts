import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { SuperheroEntity } from './superhero.entity';

@Entity({ name: 'race', schema: 'superhero' })
export class Race {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  race: string;

  @OneToMany(() => SuperheroEntity, (superhero) => superhero.race)
  superheroes: SuperheroEntity[];
}
