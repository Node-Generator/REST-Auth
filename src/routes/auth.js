import express from 'express';
import { routeTemplate } from '../utils/routes';
import register from '../controllers/auth/register';
import login from '../controllers/auth/login';

const router = express.Router();

router.post('/register', routeTemplate(register));
router.post('/login', routeTemplate(login));

export default router;
