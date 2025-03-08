import { Router } from "express";
import booksContreller from "../controller/booksContreller.js";
import { validate, validateId} from '../middleware/validationMiddlewares.js'; 
import { booksSchema } from '../schema/booksSchema.js';
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = Router()
router.get(
    '/',
    booksContreller.findAllBooksController
);
router.use(authMiddleware);
router.post(
    '/',
    validate(booksSchema),
    booksContreller.createBookController
)
router.get(
    '/search',
    booksContreller.searchBooksController
);
router.get(
    '/:id',
    validateId,
    booksContreller.findBookByIdController
);
router.patch('/:id',
    validate(booksSchema), 
    validateId,
    booksContreller.updateBookController
);
router.delete(
    '/:id',
    validateId,
    booksContreller.deleteBookContreller
);

export default router; 
