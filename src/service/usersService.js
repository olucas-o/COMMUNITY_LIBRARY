import userRepository from '../repositories/userRepositores.js';
import bcrypt from 'bcrypt'

async function createUserService(newUser) {
    const foundUser = await userRepository.findUserByEmailRepository(newUser.email);
    if (foundUser) {
        throw new Error("User already exists");
    }
    const passHash = await bcrypt.hash(newUser.password, 10)
    const user = await userRepository.createUserRepository({...newUser, password: passHash})
    return user;
}
export default {createUserService};