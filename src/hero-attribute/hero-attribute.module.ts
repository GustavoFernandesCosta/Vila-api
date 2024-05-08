import { Module } from '@nestjs/common';
import { HeroAttributeController } from './hero-attribute.controller';
import { HeroAttributeService } from './hero-attribute.service';
import { HeroAttribute } from './entity/heroAttribute.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([HeroAttribute])],
  controllers: [HeroAttributeController],
  providers: [HeroAttributeService],
})
export class HeroAttributeModule {}
