import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'attribute', schema: 'superhero' })
export class Attribute {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 200, nullable: true })
  attributeName: string;
}
