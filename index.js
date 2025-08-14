const express = require("express");
const app = express();

require("dotenv").config()
const PORT = process.env.PORT || 3000;

// middleware 
app.use(express.json());

// import routes 
const blog = require("./routes/blog");
// mount on routes 
app.use("/api/v1", blog);
// database connectivity
const connectWithDb = require("./config/databse")
connectWithDb()
// start the server 


app.listen(PORT , ()=>{
    console.log(`server is started at port number ${PORT}`);
})

app.get("/" , (req , res)=>{
    res.send(`<h1> this is your home page </h1>`)
})