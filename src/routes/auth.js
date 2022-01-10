import express from 'express';
import { routeTemplate } from '../utils/routes';
import register from '../controllers/auth/register';

const router = express.Router();

router.post('/register', routeTemplate(register));

export default router;