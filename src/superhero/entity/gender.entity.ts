import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { SuperheroEntity } from './superhero.entity';

@Entity({ name: 'gender', schema: 'superhero' })
export class Gender {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20 })
  gender: string;

  @OneToMany(() => SuperheroEntity, (superhero) => superhero.gender)
  superheroes: SuperheroEntity[];
}
