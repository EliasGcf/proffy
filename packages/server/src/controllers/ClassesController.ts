import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { convertHoursToMinutes } from '../utils/convertHourtToMinuts';
import { Class } from '../entities/Class';

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

    return res.json(classes);
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
}
