import mongoose from "mongoose";

export const connectToDb =async ()=>{
    const uri = process.env.MONGODB_URI;
    try{
        await mongoose.connect(uri);
        console.log("Mongodb has been connected");
    }catch(error){
        console.log("Error connecting to mongodb");
        process.exit(1);//Immediately stops the app with failure status
    }
    //if MongoDB crashes or network fails after a successful connection, this block will catch it.
    mongoose.connection.on("error",(error)=>{//Listens for ongoing connection errors
        console.log("Error to connect monngodb");
    })
}