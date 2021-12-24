const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config({path:"config/.env"})

const db = async ()=>{

    try {
       await mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true,useUnifiedTopology: true ,useFindAndModify: true});
       console.log("connect successfully");
        
    } catch (error) {
        console.log(`not connected! ${error}`);
        
    }
};
module.exports = db;