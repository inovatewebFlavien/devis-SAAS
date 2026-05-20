/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/require-await */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ){}

  async create({
    email,
    company_name,
    siret,
    address,
    password,
    role,
  }: CreateUserDto): Promise<UserEntity> {
    const password_hash = await hash(password, 10);

    return this.userRepository.save({
      email,
      company_name,
      siret,
      address,
      password_hash,
      role,
    });
  }

  async findAll() {
    return this.userRepository.find();
  }

  async findOne(email: string): Promise<UserEntity | null> {
    return this.userRepository.findOneBy({
      email,
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
