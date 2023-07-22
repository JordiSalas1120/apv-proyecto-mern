import jwt from "jsonwebtoken"
import Veterinario from "../models/Veterinario.js";
const checkAuth = async(req, res, next) =>{
    //console.log(req.headers.token);
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        
        try {
            token = req.headers.authorization.split(" ")[1]
            //console.log(req.headers.authorization);
            const decoded = jwt.verify(token, process.env.JSON_SECRET);
            
            req.veterinario = await Veterinario.findById(decoded.id).select(
                "-password -token -confirmado")//con select evitamos que traiga esos datos sencibles o no relevantes
        
            return next()
        } catch (error) {
            const e= new Error("Token no valido")
            res.status(403).json({msg:e.message})
        }
        
    }

    if(!token){
        const error = new Error("No hay token de autentocacion o no valido")
        res.status(403).json({msg:error.message})
        
    }
    next();
}
   

export default checkAuth