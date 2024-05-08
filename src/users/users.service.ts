import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { isValidCPF } from 'src/utils/cpf-validation';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async findOneOrFail(id: string): Promise<UserEntity> {
    try {
      return await this.userRepository.findOneOrFail({ where: { id } });
    } catch (error) {
      throw new NotFoundException('user not found');
    }
  }

  async findByEmail(email: string): Promise<UserEntity> {
    try {
      return await this.userRepository.findOneOrFail({ where: { email } });
    } catch (error) {
      throw new NotFoundException('user not found');
    }
  }

  async create(body: CreateUserDto): Promise<UserEntity> {
    const { cpf } = body;
    if ((await isValidCPF(cpf)) === false) {
      throw new BadRequestException('Invalid CPF provided');
    }
    return await this.userRepository.save(this.userRepository.create(body));
  }

  async update(id: string, body: UpdateUserDto): Promise<UserEntity> {
    const user = await this.findOneOrFail(id);

    this.userRepository.merge(user, body);

    return await this.userRepository.save(user);
  }

  async deleteById(id: string): Promise<void> {
    await this.findOneOrFail(id);
    await this.userRepository.softDelete(id);
  }

  async disableUser(id: string): Promise<void> {
    const user = await this.findOneOrFail(id);

    user.active = false;

    await this.userRepository.save(user);
  }
}
