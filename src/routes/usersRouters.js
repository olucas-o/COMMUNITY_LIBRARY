import { Router } from 'express';
import userController from '../controller/usersContreller.js';
import { validate, validateId } from '../middleware/validationMiddlewares.js'; 
import { userSchema } from '../schema/usersSchema.js';
import {authMiddleware} from '../middleware/authMiddleware.js'


const router = Router();

router.post(
    '/users',
    validate(userSchema),
    userController.createUserController
);
router.post(
    '/users/login',
    userController.loginController
);
router.use(authMiddleware)
router.get(
    '/users', 
    userController.findAllUsersController
);
router.get('/users/:id',
    validateId,
    userController.findUserByIdController
);
router.patch('/users/:id',
    validateId,
    userController.updateUserController
);
router.delete('/users/:id',
    validateId, 
    userController.deleteUserContreller
);


export default router;