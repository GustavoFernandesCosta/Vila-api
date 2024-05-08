import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { SuperheroEntity } from '../../superhero/entity/superhero.entity';
import { Attribute } from './attribute.entity';

@Entity({ name: 'hero_attribute', schema: 'superhero' })
export class HeroAttribute {
  @PrimaryColumn()
  @ManyToOne(() => SuperheroEntity, (superhero) => superhero.heroAttributes)
  @JoinColumn({ name: 'hero_id' })
  hero: SuperheroEntity;

  @PrimaryColumn()
  @ManyToOne(() => Attribute)
  @JoinColumn({ name: 'attribute_id' })
  attribute: Attribute;

  @Column({ type: 'int', nullable: true })
  attribute_value: number;
}
