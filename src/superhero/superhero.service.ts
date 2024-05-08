import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SuperheroEntity } from './entity/superhero.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SuperheroService {
  constructor(
    @InjectRepository(SuperheroEntity)
    private readonly superheroRepository: Repository<SuperheroEntity>,
  ) {}

  async findAll(): Promise<SuperheroEntity[]> {
    return this.superheroRepository.find({
      relations: [
        'gender',
        'eyeColour',
        'hairColour',
        'skinColour',
        'race',
        'publisher',
        'alignment',
      ],
    });
  }

  async findOne(id: number): Promise<SuperheroEntity> {
    try {
      return this.superheroRepository.findOne({ where: { id } });
    } catch (error) {
      console.log(error.message);
    }
  }

  async create(createHeroDto: SuperheroEntity): Promise<SuperheroEntity> {
    const { superhero_name } = createHeroDto;

    console.log(createHeroDto);

    const founded = await this.superheroRepository.findOne({
      where: { superhero_name },
    });
    if (founded) {
      console.log(founded);

      throw new BadRequestException('Super-Herói com este nome já existe');
    }

    const newHero = this.superheroRepository.create(createHeroDto);

    return await this.superheroRepository.save(newHero);
  }

  async update(id: string, updateHeroDto): Promise<SuperheroEntity> {
    const hero = await this.findOne(id);
    if (!hero) throw new Error('Super-Herói não encontrado');

    return this.superheroRepository.save(hero);
  }

  async remove(id: string): Promise<void> {
    await this.superheroRepository.delete(id);
  }
}
