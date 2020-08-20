import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { AppError } from '../errors/AppError';

import { ClassSchedule } from '../entities/ClassSchedule';

class ClassScheduleController {
  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const classScheduleRepository = getRepository(ClassSchedule);

    const schedule = await classScheduleRepository.findOne(id);

    if (!schedule) {
      throw new AppError('Schedule not found');
    }

    await classScheduleRepository.remove(schedule);

    return res.status(200).json({});
  }
}

export { ClassScheduleController };
