import express from 'express';
const app = express();

app.use(express.json());
const port = 3000;
const users = [] 
app.post('/users', (req, res) => {
    const body = req.body;
    users.push(body);
    res.status(201).json(users);
});

app.listen(port, () => {
console.log(`Server running on port ${port}`);
});