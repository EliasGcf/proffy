import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  UpdateDateColumn,
  CreateDateColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { User } from './User';
import { ClassSchedule } from './ClassSchedule';

@Entity('classes')
export class Class {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  subject: string;

  @Column()
  cost: number;

  @Column()
  user_id: string;

  @ManyToOne(() => User, user => user.classes)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => ClassSchedule, classSchedule => classSchedule.class, {
    cascade: ['insert', 'update'],
  })
  class_schedule: ClassSchedule[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
