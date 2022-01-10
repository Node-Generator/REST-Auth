import express from 'express';
import register from '../controllers/auth/register';
import login from '../controllers/auth/login';
import auth from '../middlewares/auth';

const router = express.Router();

router.post('/register', (req, res) => res.send(register(req.body)));
router.post('/login', (req, res) => res.send(login(req.body)));
router.get('/verify', auth, (req, res) => res.json({ message: 'success' }));

export default router;
