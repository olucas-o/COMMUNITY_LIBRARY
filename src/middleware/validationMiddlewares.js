import { IdSchema } from "../schema/usersSchema.js";

const validate = (schema)=> async (req, res, next)=>{
    try{
        await schema.parse(req.body);
        next()
    }catch(e){
        res.status(400).json({error: e.errors})
    }
};

const validateUserId = (req, res, next)=>{
    try{
        const userId = +req.params.id;
        IdSchema.parse({Id: userId});
        next();
    }catch(e){
        res.status(400).send({error: e.errors})
    }
};

const validateBookId = (req, res, next)=>{
    try{
        IdSchema.parse({Id: +req.params.id});
        next();
    }catch(e){
        res.status(400).send({error: e.errors})
    }
};

export {
    validate,
    validateUserId,
    validateBookId
};