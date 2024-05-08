import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { SuperheroEntity } from './superhero.entity';

@Entity({ name: 'alignment', schema: 'superhero' })
export class Alignment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 10 })
  alignment: string;

  @OneToMany(() => SuperheroEntity, (superhero) => superhero.alignment)
  superheroes: SuperheroEntity[];
}
