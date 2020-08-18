import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { classToClass } from 'class-transformer';
import { convertHoursToMinutes } from '../utils/convertHourtToMinuts';
import { Class } from '../entities/Class';
import { AppError } from '../errors/AppError';

interface IScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

export class ClassesController {
  async index(req: Request, res: Response): Promise<Response> {
    const classesRepository = getRepository(Class);
    const filters = req.query;

    const subject = filters.subject as string;
    const week_day = filters.week_day as string;
    const time = filters.time as string;

    if (!filters.week_day || !filters.subject || !filters.time) {
      return res.status(400).json({
        error: 'Missing filters to search classes',
      });
    }

    const timeInMinutes = convertHoursToMinutes(time);

    const classes = await classesRepository.find({
      relations: ['user'],
      join: {
        alias: 'classes',
        innerJoin: { class_schedule: 'classes.class_schedule' },
      },
      where: (qb: any) => {
        qb.where('classes.subject ILIKE :subject', { subject })
          .andWhere('class_schedule.week_day = :week_day', { week_day })
          .andWhere('class_schedule.from <= :timeInMinutes', { timeInMinutes })
          .andWhere('class_schedule.to > :timeInMinutes', { timeInMinutes });
      },
    });

    return res.json(classToClass(classes));
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { subject, cost, schedule } = req.body;
    const { user } = req;

    const classesRepository = getRepository(Class);

    const classSchedules = schedule.map((scheduleItem: IScheduleItem) => ({
      week_day: scheduleItem.week_day,
      from: convertHoursToMinutes(scheduleItem.from),
      to: convertHoursToMinutes(scheduleItem.to),
    }));

    const newClass = classesRepository.create({
      user_id: user.id,
      subject,
      cost,
      class_schedule: classSchedules,
    });

    await classesRepository.save(newClass);

    return res.status(201).json(newClass);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { subject, cost, class_schedule } = req.body;
    const { id } = req.params;

    const classesRepository = getRepository(Class);

    const findClass = await classesRepository.findOne(id, {
      relations: ['class_schedule'],
    });

    if (!findClass) {
      throw new AppError('Class not found');
    }

    Object.assign(findClass, { subject, cost, class_schedule });

    await classesRepository.save(findClass);

    return res.json(findClass);
  }
}
