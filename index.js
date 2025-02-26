import express from 'express';
import usersRouters from './src/routes/usersRouters.js'
import booksRouters from './src/routes/booksRouters.js'
const app = express();

app.use(express.json());
app.use(usersRouters);
app.use(booksRouters);

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});