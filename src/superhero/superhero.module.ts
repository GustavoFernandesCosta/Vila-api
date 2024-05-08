import { Module } from '@nestjs/common';
import { SuperheroController } from './superhero.controller';
import { SuperheroService } from './superhero.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuperheroEntity } from './entity/superhero.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SuperheroEntity])],
  controllers: [SuperheroController],
  providers: [SuperheroService],
})
export class SuperheroModule {}
