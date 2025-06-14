import jwt from "jsonwebtoken";
import User from "../model/User.js";

export const requireSignIn = async()=>{
    try{
        const decode = jwt.verify(req.headers.authorization,process.env.JWT_SECRET);
        req.user = decode;
        next();
    }catch(error){
        console.log(error);
    }
}

//admin middlewares

export const isAdmin = async(req,res,next)=>{
    try{
        const user = await User.findById(req.user._id);
        if(user.role!=="admin"){
            return res.status(401).send("Unauthorized");
        }else{
            next();
        }
    }catch(error){
        console.log(error);
    }
} 