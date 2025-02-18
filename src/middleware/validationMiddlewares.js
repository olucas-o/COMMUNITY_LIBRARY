import { userIdSchema } from "../schema/usersSchema.js";

const validate = (schema)=> async (req, res, next)=>{
    try{
        await schema.parse(req.body);
        next()
    }catch(e){
        res.status(400).json({error: e.errors})
    }
};

const validateId = (req, res, next)=>{
    try{
        const userId = +req.params.id;
        userIdSchema.parse({userId: userId});
        next();
    }catch(e){
        res.status(400).json({error: e.errors})
    }
};

export {validate,
    validateId
};