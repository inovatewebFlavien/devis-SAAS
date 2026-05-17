/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column()
  firstName: string | undefined;

  @Column()
  lastName: string | undefined;

  @Column()
  email: string | undefined;
}