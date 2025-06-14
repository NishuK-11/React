import userModel from "../model/User.js";
import bcrypt from "bcrypt";
import JWT  from "jsonwebtoken"
export const registerController =async (req,res) =>{
    try{
        const {name,email,password}  = req.body;
        if(!email || !password){
            return res.status(400).json({
                error:"Please fill all the required details"
            })
        }
        const user = await userModel.findOne({email});
        if(user){
            return res.status(400).json({
                error:"User already exists"
            })
        }

        //password ko bcrypt kr rhe hai, dhyan se dekho
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = await userModel({
            name,
            email,
            password:hashedPassword,
        }).save();
        return res.status(200).send({
            success:true,
            message:"User has been register",
        })

    }catch(error){
        console.log(error);
        return res.status(500).send({
            success:true,
            message:"User has been register",
        })
    }

}
export const loginController = async(req,res)=>{
    try{

        const {email,password} = req.body;
        const user = await userModel.findOne({email});
        if(!user || !password){
            return res.status(400).json({
                error:"All fields are required"
        });
        }
        
        if(!user){
            return res.status(400).json({
                error:"Invalid user details"
            })
        }

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({
                error:"Invalid Password"
            })
        }

        //token generate kareyenge
        const token = JWT.sign({id:user._id},process.env.JWT_SECRET,{
            expiresIn:"7d",
        })

        return res.status(200).send({
            success:true,
            message:"Login Successful",
            token,
            user:{
                id:user._id,
                email:user.email,
                role:user.role,
            }
        })

    }catch{
        console.log(error);
        return res.status(500).send({
            success:true,
            message:"Problem in login API",
        })
    }
}