import { Response, Request } from 'express';
import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import { User } from '../entities/User';
import { AppError } from '../errors/AppError';

export class UsersController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password, whatsapp, bio, avatar } = req.body;
    const usersRepository = getRepository(User);

    const userExists = await usersRepository.findOne({ where: { email } });

    if (userExists) {
      throw new AppError('User already exists.');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
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
}
