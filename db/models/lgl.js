const mongoose = require("mongoose");
const User = new mongoose.Schema({
    num_label:{
        type:String,
        required:true,
        trim:true
    },
    first_name:{
        type:String,
        required:true,
        trim:true
    },
    last_name:{
        type:String,
        required:true,
        trim:true
    }
})