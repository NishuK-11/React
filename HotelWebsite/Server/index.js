import express from "express";
import dotenv from "dotenv";
import cors from "cors";//	Allows frontend to call backend APIs
import morgan from "morgan";//Logs HTTP requests to console	

import { connectToDb } from "./config/db.js";

//routes import
import authRoutes from "./routes/User.js";
import postRoutes from "./routes/Post.js";
import CategoryRoutes from "./routes/Category.js";

import fileUpload from "express-fileupload";
import bodyparser from "body-parser";


dotenv.config();
//database connect to db

connectToDb();
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(fileUpload({ useTempFiles: true }));


const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
     res.send("hii everyone");
});
//Routes

app.use('/api/auth',authRoutes);
app.use("/api/post",postRoutes);
app.use("/api/category",CategoryRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
