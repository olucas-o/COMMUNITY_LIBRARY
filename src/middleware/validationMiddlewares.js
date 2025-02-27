import { IdSchema } from "../schema/IdSchema.js";

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
        IdSchema.parse({Id: +req.params.id});
        console.log(+req.params.id)
        next();
    }catch(e){
        res.status(400).send({error: e.errors})
    }
};

export {
    validate,
    validateId
};