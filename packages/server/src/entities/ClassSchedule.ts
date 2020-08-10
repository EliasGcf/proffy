import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import { Class } from './Class';

@Entity('class_schedule')
export class ClassSchedule {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  class_id: string;

  @OneToOne(() => Class)
  @JoinColumn({ name: 'class_id' })
  class: Class;

  @Column()
  week_day: number;

  @Column()
  from: number;

  @Column()
  to: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
