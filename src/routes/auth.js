import express from 'express';
import register from '../controllers/auth/register';
import login from '../controllers/auth/login';
import auth from '../middlewares/auth';

const router = express.Router();

router.post('/register', async (req, res) => res.send(await register(req.body)));
router.post('/login', async (req, res) => res.send(await login(req.body)));
router.get('/verify', auth, (req, res) => res.json({ message: 'success' }));

export default router;
