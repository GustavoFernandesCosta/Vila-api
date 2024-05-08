import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SuperheroEntity } from './superhero.entity';

@Entity({ name: 'publisher', schema: 'superhero' })
export class Publisher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  publisher: string;

  @OneToMany(() => SuperheroEntity, (superhero) => superhero.publisher)
  superheroes: SuperheroEntity[];
}
