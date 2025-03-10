import { Router } from 'express';
import { validate, validateId  } from '../middleware/validationMiddlewares.js'; 
import { loansSchema } from '../schema/loansShema.js';
import {authMiddleware} from '../middleware/authMiddleware.js'
import loansController from '../controller/loansController.js';


const router = Router();

router.post(
    '/',
    validate(loansSchema),
    loansController.createLoanController
);
router.use(authMiddleware);
router.get(
    '/',
    loansController.findAllLoansController
);
router.get(
    '/:id',
    validateId,
    loansController.findLoanByIdController
);
router.delete(
    '/:id',
    validateId,
    loansController.deleteBLoanContreller
)
export default router