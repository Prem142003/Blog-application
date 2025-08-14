// import model
const Post = require("../models/postModel")
const Comment = require("../models/commentModel")

const createcomment = async (req, res) => {
    try {
        console.log("Received data:", req.body);
        // fetch data from request ka body
       const {post ,  user , body} = req.body;
         // save the new comment into the database 
        const savedcomment =  await   Comment.create({ post, user, body });
          console.log("saved comment is" , savedcomment) // debugging
        const udpatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedcomment._id} }, {new: true}  )
        .populate("comments") //populate the comments array with comment documents
        .exec();

          
        res.json({
            post: udpatedPost,
        });

    } 
    catch (error) {
       return res.status(500).json({
        error:"error while ceating comments"
       })
    }
};

module.exports = { createcomment }; 