//import mongoose
const mongoose = require("mongoose");


//route handler
const commentSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", //reference to the post model
        // jb bhi kisi or model ko uski ID ke through refer kr rahe hote hai to use 
        // aise likhte hai 
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "Post",

        // matlab post ek id ko store kr raha hai jo post ko reference kr raha hai 
    },
    user: {
        type: String,
        required:true,
    },
    body: {
        type:String,
        required:true,
    }
});

//export
module.exports = mongoose.model("Comment", commentSchema);