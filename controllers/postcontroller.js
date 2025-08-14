const Post = require("../models/postModel")

exports.createpost = async (req , res)=>{

    try{
        // fetch title and body from req ka body 
           const {title , body } = req.body;
        // save title and body into database 
          const savedpost = await Post.create({title , body});

          res.json({
            post:savedpost
          })
           
    }
    catch(error){

       return res.status(400).json({
        error:"error while cerating post "
       })
    }
}

exports.getallpost = async(req , res)=>{
    try {
        const posts = await Post.find().populate("likes").populate("comments").exec();
        res.json({
            posts,
        })
    }
    catch(error) {
        return res.status(400).json({
            error: "Error while fetching post",
        });
    }
}