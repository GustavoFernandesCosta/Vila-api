import { Module } from '@nestjs/common';
import { HeroPowerController } from './hero-power.controller';
import { HeroPowerService } from './hero-power.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeroPower } from './entity/heroPower.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HeroPower])],
  controllers: [HeroPowerController],
  providers: [HeroPowerService],
})
export class HeroPowerModule {}
