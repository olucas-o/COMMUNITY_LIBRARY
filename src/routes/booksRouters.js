import { Router } from "express";
import booksContreller from "../controller/booksContreller.js";
import { validate, validateId} from '../middleware/validationMiddlewares.js'; 
import { booksSchema } from '../schema/booksSchema.js';
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = Router()
router.get(
    '/books',
    booksContreller.findAllBooksController
);
router.use(authMiddleware);
router.post(
    '/books',
    validate(booksSchema),
    booksContreller.createBookController
)
router.get(
    '/books/search',
    booksContreller.searchBooksController
);
router.get(
    '/books/:id',
    validateId,
    booksContreller.findBookByIdController
);
router.patch('/books/:id',
    validate(booksSchema), 
    validateId,
    booksContreller.updateBookController
);
router.delete(
    '/books/:id',
    validateId,
    booksContreller.deleteBookContreller
);

export default router; 
