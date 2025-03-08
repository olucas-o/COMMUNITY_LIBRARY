import express from 'express';
import 'dotenv/config.js';
import './src/service/cronService.js';
import routers from './src/routes/index.js'

const app = express();

app.use(express.json());
app.use(routers)

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});