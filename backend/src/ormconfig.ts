/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
import { UserEntity } from './user/entities/user.entity';

const options: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port:  Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  migrations: ['./src/migrations/*{.ts,.js}'],
  entities: [UserEntity],
};

export const typeOrmModuleOptions: TypeOrmModuleOptions = {
  ...options,
  synchronize: true,
  logging: true,
};

export const connectionSource = new DataSource(options);