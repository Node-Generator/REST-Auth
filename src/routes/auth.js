import express from 'express';
import { routeTemplate } from '../utils/routes';
import register from '../controllers/auth/register';
import login from '../controllers/auth/login';
import auth from '../middlewares/auth';

const router = express.Router();

router.post('/register', routeTemplate(register));
router.post('/login', routeTemplate(login));
router.get('/verify', auth, (req, res) => res.json({ message: 'success' }));

export default router;
