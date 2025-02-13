import { Router } from 'express';
import userController from '../controller/usersContreller.js';
import { validate } from '../middleware/validationMiddlewares.js'; 
import { userSchema } from '../schema/usersSchema.js';


const router = Router();

router.post('/users',
    validate(userSchema),
    userController.createUserController
);

export default router;