import jwt from "jsonwebtoken";
import User from "../model/User.js";

export const requireSignIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ success: false, message: "No token provided" });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};


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