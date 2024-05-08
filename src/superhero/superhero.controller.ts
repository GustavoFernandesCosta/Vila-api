import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { SuperheroService } from './superhero.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { SuperheroEntity } from './entity/superhero.entity';

@UseGuards(AuthGuard)
@Controller('superhero')
export class SuperheroController {
  constructor(private readonly superheroService: SuperheroService) {}

  @Get()
  findAll(): Promise<SuperheroEntity[]> {
    return this.superheroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<SuperheroEntity> {
    return this.superheroService.findOne(id);
  }

  @Post()
  create(@Body() createSuperheroDto): Promise<SuperheroEntity> {
    return this.superheroService.create(createSuperheroDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateSuperheroDto,
  ): Promise<SuperheroEntity> {
    return this.superheroService.update(id, updateSuperheroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.superheroService.remove(id);
  }
}
