import express from 'express';
import usersRouters from './usersRouters.js';
import booksRouters from './booksRouters.js';
import loansRouter from './loansRouter.js';

const router = express();

router.use("/users",usersRouters);
router.use("/books",booksRouters);
router.use("/loans",loansRouter);

export default router