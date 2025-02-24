import jwt from 'jsonwebtoken';
import 'dotenv/config';
import userRepositores from '../repositories/userRepositores.js';
import bcrypt from "bcrypt"

function generateJWT(Id) {
    return jwt.sign({ Id }, 
    process.env.SECRET_JWT,
    { expiresIn : 86400 });
}

async function loginService(email,password) {
    const user = await userRepositores.findUserByEmailRepository(email)
    if(!user) throw new Error('Invalid user!')
    const passwordValided = await bcrypt.compare(password, user.password)
    if(!passwordValided) throw new Error('Invalid user!')
    return generateJWT(user.id)
}
export {generateJWT, loginService};