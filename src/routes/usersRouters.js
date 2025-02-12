import { Router } from 'express';
import userController from '../controller/usersContreller.js';

const router = Router();

router.post('/users', userController.createUserController);

export default router;