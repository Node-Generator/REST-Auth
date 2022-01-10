import express from 'express';
import { errorHandler } from '../middlewares/errorHandler';
import authRoutes from './auth';

const routes = express();
routes.use(express.json());

routes.use('/auth', authRoutes);

routes.use(errorHandler);

export default routes;
