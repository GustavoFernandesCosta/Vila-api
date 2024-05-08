import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';

export class User {
  cpf: string;
  name: string;
  email: string;
  password: string;
  profilePicture: string;
  biography: string;
}

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, {
    message: 'Invalid CPF format. Expected format: 000.000.000-00',
  })
  cpf: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Matches(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
    {
      message:
        'Invalid password, must contain: 1 special character, 1 number, 1 lowercase letter, 1 uppercase letter e 8 characters minimum',
    },
  )
  password: string;

  @IsString()
  @IsOptional()
  profilePicture: string;

  @IsString()
  @IsOptional()
  biography: string;
}

export class UpdateUserDto {
  @IsString()
  @Matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, {
    message: 'Invalid CPF format. Expected format: 000.000.000-00',
  })
  cpf: string;

  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  profilePicture: string;

  @IsString()
  biography: string;
}
