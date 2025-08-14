const express = require("express");
const router = express.Router();

// import controllers
const { dummyLink, likepost, unlikepost } = require(__dirname + "/../controllers/likecontroller.js");
const { createcomment } = require(__dirname + "/../controllers/commentcontroller.js");
 
const { createpost, getallpost } = require(__dirname + "/../controllers/postcontroller.js");


// Relative Paths Can Be Unreliable

// require("../controllers/postcontroller.js") assumes the file is exactly at ../controllers/ relative to where the script is running.
// However, when you run node index.js, the working directory might not be where you expect.
// __dirname Provides the Absolute Path

// __dirname gives the absolute path of the current file.
// So, __dirname + "/../controllers/postcontroller.js" ensures that Node.js always looks for postcontroller.js in the correct directory.
// When Should You Use __dirname?
// If you experience issues with relative paths, especially in complex folder structures.
// When running your app from different directories or as a service (e.g., PM2, Docker).
// Your issue was likely due to Node.js not resolving the relative path correctly. Using __dirname ensured the correct absolute path was used. 


// Define routes
router.get("/dummyroute", dummyLink);
router.post("/likes/like", likepost);
router.post("/likes/unlike", unlikepost);
router.post("/comments/create", createcomment);
router.post("/posts/create", createpost);
router.get("/posts", getallpost);

module.exports = router;
