import express from 'express';
import usersRouters from './src/routes/usersRouters.js';
import booksRouters from './src/routes/booksRouters.js';
import loansRouter from './src/routes/loansRouter.js';
import 'dotenv/config.js';
import './src/service/cronService.js' 

const app = express();

app.use(express.json());
app.use(usersRouters);
app.use(booksRouters);
app.use(loansRouter)

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});