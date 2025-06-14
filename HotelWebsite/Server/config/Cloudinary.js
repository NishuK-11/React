import dotenv from "dotenv";
dotenv.config(); 

import {v2 as cloudinary} from "cloudinary";

console.log("Cloudinary config:", {
  name: process.env.CLOUDINARY_CLOUD_NAME,
  key: process.env.CLOUDINARY_API_KEY ? "✓" : "Missing",
});



cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,  // ✅ fixed key
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;