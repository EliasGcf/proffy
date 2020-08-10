import express from 'express';

import { UsersController } from './controllers/UsersController';
import { SessionsController } from './controllers/SessionsController';
import { ClassesController } from './controllers/ClassesController';
import { ConnectionsController } from './controllers/ConnectionsController';

import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

const routes = express.Router();

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();
const usersController = new UsersController();
const sessionsController = new SessionsController();

routes.get('/classes', classesController.index);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

routes.post('/users', usersController.create);

routes.post('/sessions', sessionsController.create);

routes.use(ensureAuthenticated);

routes.post('/classes', classesController.create);

export default routes;
