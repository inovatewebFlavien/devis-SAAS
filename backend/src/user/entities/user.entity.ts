/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string | undefined;

  @Column({type: 'varchar', length: 255, unique: true})
  email: string | undefined;

  @Column({ type: 'varchar', length: 255})
  password_hash: string|undefined

  @Column({type: 'varchar', length: 255})
  company_name: string|undefined

  @Column({type: 'varchar', length:255, nullable: true})
  siret: string|undefined;

  @Column({type: 'text', nullable: true})
  address: string|undefined

  @CreateDateColumn()
  created_at: Date|undefined
}