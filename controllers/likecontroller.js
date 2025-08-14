
const Post = require("../models/postModel")
const Like = require("../models/likeModel")

exports.likepost = async (req , res)=>{
    try {
        // Fetch post and user from req body
        const { post, user } = req.body;

        // Save them into database
        const savedlike = await Like.create({ post, user });

         //update the post collection basis on this
         const udpatedPost = await Post.findByIdAndUpdate(post, {$push: {likes: savedlike._id} }, {new :true})
         .populate("likes").exec();
 
         res.json({
             post:udpatedPost,
         });
        
    } 
    catch (error) {
        return res.status(400).json({
            error: "Error while Liking post",
        });
    }
}

exports.unlikepost = async(req , res)=>{
    try{
        const{post, like} = req.body;
        //find and delete the like collection me se
        const deletedLike = await Like.findOneAndDelete({post:post, _id:like});

        //udpate the post collection
        const udpatedPost = await Post.findByIdAndUpdate(post,
                                                        {$pull: {likes: deletedLike._id} }, 
                                                        {new: true});

        res.json({
            post:udpatedPost,
        });

    }
    catch(error) {
        return res.status(400).json({
            error: "Error while Unliking post",
        });
    }

}
exports.dummyLink = (req , res)=>{
    res.send(`<h1> this is dummy page </h1>`)
}