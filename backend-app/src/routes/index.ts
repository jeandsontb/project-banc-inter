import { Router } from 'express';
import pixRouter from './pix.routes';
import userRouter from './user.routes';

const routes = Router();

routes.use('/user', userRouter);
routes.use('/pix', pixRouter);

export default routes;