import { Router } from 'express';
import userController from '../controller/usersContreller.js';
import { validate, validateUserId } from '../middleware/validationMiddlewares.js'; 
import { userSchema } from '../schema/usersSchema.js';
import {authMiddleware} from '../middleware/authMiddleware.js'


const router = Router();

router.post(
    '/users',
    validate(userSchema),
    userController.createUserController
);
router.post(
    '/user/login',
    userController.loginController
);
router.use(authMiddleware)
router.get(
    '/users', 
    userController.findAllUsersController
);
router.get('/users/:id',
    validateUserId,
    userController.findUserByIdController
);
router.patch('/users/:id',
    validateUserId,
    userController.updateUserController
);
router.delete('/users/:id',
    validateUserId, 
    userController.deleteUserContreller
);


export default router;