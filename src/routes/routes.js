import express from 'express';
import authRoutes from './auth';

const routes = express();

routes.use(express.json());
routes.use('/auth', authRoutes);

export default routes;
