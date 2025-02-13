const validate = (schema)=> async (req, res, next)=>{
    try{
        await schema.parse(req.body);
        next()
    }catch(e){
        res.status(400).json({error: e.errors})
    }
};
export {validate};