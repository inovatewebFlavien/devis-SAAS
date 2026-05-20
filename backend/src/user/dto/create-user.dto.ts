/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { IsEmail, IsEnum, IsOptional, IsString, MinLength } from 'class-validator';
import { Role } from './role';

export class CreateUserDto {
  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(8, { message: 'Le mot de passe doit contenir au moins 8 caractères' })
  password!: string;

  @IsString()
  company_name!: string;

  @IsOptional()
  @IsString()
  siret!: string;

  @IsOptional()
  @IsString()
  address!: string;

  @IsEnum(Role)
  role!: Role;
}