import { Router } from "express";
import booksContreller from "../controller/booksContreller.js";
import { validate, validateBookId} from '../middleware/validationMiddlewares.js'; 
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
router.get('/books/search', booksContreller.searchBooksController);
router.get('/books/:id', validateBookId, booksContreller.findBookByIdController);
router.patch('/books/:id', validate(booksSchema), validateBookId, booksContreller.updateBookController);
router.delete('/books/:id', validateBookId, booksContreller.deleteBookContreller);
export default router; 