import * as dotenv from 'dotenv';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/auth/auth.module';
import { SuperheroModule } from './superhero/superhero.module';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    SuperheroModule,
    //   TypeOrmModule.forRoot({
    //     type: 'mongodb',
    //     url: 'mongodb://localhost:27017/vila-api',
    //     synchronize: true,
    //     useUnifiedTopology: true,
    //     entities: [],
    // })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
