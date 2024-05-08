import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard)
  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Post()
  async create(@Body() body: CreateUserDto) {
    return await this.userService.create(body);
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.userService.findOneOrFail(id);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateUserDto,
  ) {
    return await this.userService.update(id, body);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', new ParseUUIDPipe()) id: string): Promise<void> {
    return await this.userService.deleteById(id);
  }

  @UseGuards(AuthGuard)
  @Put('/disable/:id')
  @HttpCode(HttpStatus.OK)
  async disableUser(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<void> {
    return await this.userService.disableUser(id);
  }
}
