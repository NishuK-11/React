import express from "express";
import { loginController, registerController } from "../controller/User.js";
import { requireSignIn } from "../middlewares/Auth.js";
const app = express.Router();

app.post('/register',registerController);
app.post('/login',loginController);
app.get('/user-auth',requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
})

app.get('/is-admin',requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
})

export default app;
