import rateLimit from "express-rate-limit";

export let limitApi = () =>{
    return rateLimit({
        windowMs: 30 * 1000,
        max: 100,
        standardHeaders: true, 
        legacyHeaders: false, 
        message: (req,res)=>{
            res.status(429).send({
                status: 429, 
                message: "Limite alcanzado"
            });
        }
    })
}