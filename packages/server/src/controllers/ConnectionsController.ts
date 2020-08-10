import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { Connection } from '../entities/Connection';

export class ConnectionsController {
  async index(req: Request, res: Response): Promise<Response> {
    // const totalConnections = await db('connections').count('* as total');
    const connectionsRepository = getRepository(Connection);

    const [, total] = await connectionsRepository.findAndCount();

    return res.json({ total });
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { user_id } = req.body;

    const connectionsRepository = getRepository(Connection);

    const connection = connectionsRepository.create({ user_id });

    await connectionsRepository.save(connection);

    return res.status(201).send();
  }
}
