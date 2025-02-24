import "dotenv/config";
import jwt from "jsonwebtoken";
import usersService from "../service/usersService.js";

export async function authMiddleware(req, res, next) {
    const tokenHeader = req.headers.authorization;
    
    if (!tokenHeader) {
    return res.status(401).send({ message: "Token não informado" });
    }
    
    const parts = tokenHeader.split(" ");
    
    if (parts.length !== 2) {
    return res.status(401).send({ message: "Token mal formatado" });
    }
    
    const [scheme, token] = parts;
    
    if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ message: "Token mal formatado" });
    }
    
    jwt.verify(token, process.env.SECRET_JWT, async (err, decoded) => {

        if (err) {
        return res.status(401).send({ message: "Token Invalid token!"});
        }
        
        const user = await usersService.findUserByIdService(decoded.Id);
        
        if (!user) {
        return res.status(401).json({ message: "Invalid token!2" });
        }
        
        req.userId = user.id;

        next();
    
        });
        
    }