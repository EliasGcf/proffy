import { Response, Request } from 'express';
import { getRepository } from 'typeorm';
import { classToClass } from 'class-transformer';
import { hash } from 'bcryptjs';

import { User } from '../entities/User';
import { AppError } from '../errors/AppError';

export class UsersController {
  public async create(req: Request, res: Response): Promise<Response> {
    const {
      first_name,
      last_name,
      email,
      password,
      whatsapp,
      bio,
      avatar,
    } = req.body;
    const usersRepository = getRepository(User);

    const userExists = await usersRepository.findOne({ where: { email } });

    if (userExists) {
      throw new AppError('User already exists.');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      first_name,
      last_name,
      email,
      password: hashedPassword,
      whatsapp,
      bio,
      avatar,
    });

    await usersRepository.save(user);

    delete user.password;

    return res.status(201).json(user);
  }

  public async index(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;

    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(id, {
      relations: ['classes', 'classes.class_schedule'],
    });

    if (!user) {
      throw new AppError('User not found.');
    }

    return res.json(classToClass(user));
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { first_name, last_name, email, whatsapp, bio } = req.body;

    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(req.user.id);

    if (!user) {
      throw new AppError('User not found');
    }

    Object.assign(user, { first_name, last_name, email, whatsapp, bio });

    await usersRepository.save(user);

    return res.json(user);
  }
}
