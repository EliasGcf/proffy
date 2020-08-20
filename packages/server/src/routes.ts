import express from 'express';

import { UsersController } from './controllers/UsersController';
import { SessionsController } from './controllers/SessionsController';
import { ClassesController } from './controllers/ClassesController';
import { ConnectionsController } from './controllers/ConnectionsController';
import { ClassScheduleController } from './controllers/ClassScheduleController';

import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

const routes = express.Router();

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();
const usersController = new UsersController();
const sessionsController = new SessionsController();
const classScheduleController = new ClassScheduleController();

routes.get('/classes', classesController.index);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

routes.post('/users', usersController.create);

routes.post('/sessions', sessionsController.create);

routes.use(ensureAuthenticated);

routes.post('/classes', classesController.create);
routes.get('/users/me', usersController.index);
routes.put('/classes/:id', classesController.update);
routes.put('/users', usersController.update);
routes.delete('/class-schedule/:id', classScheduleController.delete);

export default routes;
