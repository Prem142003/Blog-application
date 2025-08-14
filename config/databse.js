const { error } = require("console");
const mongoose = require("mongoose");
require("dotenv").config();

const connectWithDb = ()=>{
    mongoose.connect(process.env.DATABASE_URL , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(
        console.log("DB connected successfully")
    )
    .catch((error)=>{
        console.log("DB facing connected issues")
        console.log(error)
        process.exit(1)
    }
         
    )
}

module.exports = connectWithDb



// Database and server are separate:
// The database (MongoDB) and the server (Express.js) are two independent systems.
// Your server (Express) interacts with the database via Mongoose (driver) 
// to fetch or store data as needed.
// mongoose.connect(process.env.DATABASE_URL  --> meaning ( mongoose sun server (Express) ko ees wale (DATABASE_URL) ke through datbase se coonect kara do )