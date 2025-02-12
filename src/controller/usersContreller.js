import userService from '../service/usersService.js';


async function createUserController (req, res) {
    const newUser = req.body;
    try {
        const user = await userService.createUserService(newUser);
        res.status(201).send({user});
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
}

export default {createUserController};