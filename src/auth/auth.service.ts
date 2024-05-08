import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/users/users.service';
import { AuthResponseDto } from './dto/auth.dto';
import { compareSync as bcryptCompareSync } from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  private jwtExpirationTimeInSeconds: number;
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {
    this.jwtExpirationTimeInSeconds = +this.configService.get<number>(
      'JWT_EXPIRATION_TIME',
    );
  }

  async signIn(email: string, password: string): Promise<AuthResponseDto> {
    const foundUser = await this.userService.findByEmail(email);

    if (!foundUser) throw new UnauthorizedException('User not found!');

    if (!bcryptCompareSync(password, foundUser.password))
      throw new UnauthorizedException('Invalid password!');

    if (foundUser.active === false)
      throw new UnauthorizedException('User not active!');

    const payload = { sub: foundUser.id, email: foundUser.email };

    const token = this.jwtService.sign(payload);

    return { token, expiresIn: this.jwtExpirationTimeInSeconds };
  }
}
