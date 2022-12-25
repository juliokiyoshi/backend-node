import { Router } from 'express';
import { create } from '../controllers/user.controller';

const router = Router();

router.post('/user', create);

router.get('/user', (req, res) => res.send('hello word'));

export default router;
