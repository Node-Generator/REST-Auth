import express from 'express';
import { errorHandler } from '../utils/customError';
import authRoutes from './auth';

const routes = express();

routes.use(express.json());
routes.use('/auth', authRoutes);

routes.use(errorHandler);

export default routes;
