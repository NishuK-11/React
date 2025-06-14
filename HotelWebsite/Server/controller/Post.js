import cloudinary from "../config/Cloudinary.js";
import Post from "../model/Post.js";
import slug from "slugify";

export const createPostController = async (req, res) => {
  try {
    const {
      title,
      hotelLocation,
      description,
      category,
      isAvailable,
      guest,
      price,
      nearArea,
      facilities
    } = req.body;

    // Validation
    if (
      !title ||
      !hotelLocation ||
      !description ||
      !category ||
      !isAvailable ||
      !guest ||
      !price ||
      !nearArea ||
      !facilities
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const files = req.files?.images;

    if (!files) {
      return res.status(400).json({
        message: "You must provide 3 images",
      });
    }

    // Normalize to array if only one file is uploaded
    const fileArray = Array.isArray(files) ? files : [files];

    if (fileArray.length !== 3) {
      return res.status(400).json({
        message: "You must provide 3 images",
      });
    }

    // Upload images to Cloudinary
    const imageUrls = await Promise.all(
      fileArray.map((file) =>
        cloudinary.uploader
          .upload(file.tempFilePath)
          .then((result) => result.secure_url)
      )
    );

    // Create new post
    const newPost = new Post({
      title,
      hotelLocation,
      description,
      category,
      isAvailable,
      guest,
      price,
      nearArea: JSON.parse(nearArea),
      facilities: JSON.parse(facilities),
      images: imageUrls,
      slug: slug(title, { lower: true }),
    });
console.log(req.files); // see structure

    await newPost.save();

    return res.status(201).json({
      message: "Post Created Successfully",
      post: newPost,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};
export const getPostController = async(req,res) =>{
  try{
    const post = await Post.findOne({slug:req.params.slug})
    .select("-images")
    .populate("category")
    return res.status(200).send({
      success:true,
      message:"Post successfully",
      post,
    })

  }catch(error){
    console.log(error);
    return res.status(500).send({
      success:true,
      message:"Error while getting post",
    })
  }
}
export const getAllPostController = async(req,res)=>{
  try{
    const posts = await Post.find({});
    return res.status(200).send({
      success:true,
      message:"Posts fetched successfully",
      posts,
    })
  }catch(error){
    console.log(error);
    return res.status(500).send({
      success:false,
      message:"Error while getting all posts",
      error,
    })
  }
}

export const updatePostController = async(req,res)=>{
  try{

    const {id} = req.params;
    const {title,hotelLocation,description,facilities,nearArea,category,guest,isAvailable,price} = req.body;

    const files = req.files?.images;
    //find existing post
    const post = await Post.findById(id);
    if(!post){
      return res.status(404).json({message:"Post not found"});
    }

    if(
      !title &&
      !hotelLocation&&
      !description&&
      !facilities&&
      !nearArea&&
      !category&&
      !guest&&
      !isAvailable === undefined &&
      !price&&
      !files
    ){
      return res.status(400).json({message:"No feilds provided to update."});
    }
    //handle image update

    let uploadImage = post.images;
    if(files && files.length === 3){
      //delete old image
      await Promise.all(
        post.images.map((url)=>{
          const publicId = url.split("/").pop().split(".")[0];
          return cloudinary.uploader.destroy(publicId);
        })
      )
      //upload new images
      uploadImage = await Promise.all(
        files.map((file)=>
          cloudinary.uploader
          .upload(file.tempFilePath)
          .then((result)=>result.secure_url)
        )
      )

    }else if(files && files.length !==3){
      return res
            .status(400)
            .json({message:"Please upload exactly 3 images"});
    }
    //update post

    const updatePost = await Post.findByIdAndUpdate(id,{
      ...(title && {title}),
      ...(hotelLocation && {hotelLocation}),
      ...(description && {description}),
      ...(facilities && {facilities}),
      ...(nearArea && {nearArea}),
      ...(category && {category}),
      ...(guest && {guest}),
      ...(isAvailable !== undefined &&{isAvailable}),
      ...(price && {price}),
      ...(files && {images:uploadImage}),
      ...(title && {slug:slug(title,{lower:true})}),
    });
    await updatePost.save();
    return res.status(200).send({
      success:true,
      message:"Post updated successfully",
      updatePost,
    })

  }catch(error){
    console.log(error);
    return res.status(500).send({
      success:false,
      message:"Error while updating post",
    })
  }
}
export const deletePostController = async(req,res)=>{
  try{
    await Post.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      success:true,
      message:"Posts deleted successfully",
    })
  }catch(error){
    console.log(error);
    return res.status(500).send({
      success:false,
      message:"Error while getting all posts",
      error,
    })
  }
}
