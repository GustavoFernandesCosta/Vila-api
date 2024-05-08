import { Entity, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { SuperheroEntity } from '../../superhero/entity/superhero.entity';
import { Superpower } from './superpower.entity';

@Entity({ name: 'hero_power', schema: 'superhero' })
export class HeroPower {
  @PrimaryColumn()
  @ManyToOne(() => SuperheroEntity, (superhero) => superhero.heroPowers)
  @JoinColumn({ name: 'hero_id' })
  hero: SuperheroEntity;

  @PrimaryColumn()
  @ManyToOne(() => Superpower, (superpower) => superpower.heroPowers)
  @JoinColumn({ name: 'power_id' })
  superpower: Superpower;
}
