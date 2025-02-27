import { Router } from 'express';
import { validate, validateId  } from '../middleware/validationMiddlewares.js'; 
import { loansSchema } from '../schema/loansShema.js';
import {authMiddleware} from '../middleware/authMiddleware.js'
import loansController from '../controller/loansController.js';


const router = Router();

router.post(
    '/loans',
    validate(loansSchema),
    loansController.createLoanController
);
router.use(authMiddleware);
router.get(
    '/loans',
    loansController.findAllLoansController
);
router.get(
    '/loans/:id',
    validateId,
    loansController.findLoanByIdController
);
router.delete(
    '/loans/:id',
    validateId,
    loansController.deleteBLoanContreller
)
export default router