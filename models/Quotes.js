const mongoose = require("mongoose");

const QuoteSchema = new mongoose.Schema(

    {
        name:{type:String , required:true},
        email:{type:String , required:true},
        phone:{type:String },
        website:{type:String},
        option: {type:String , required:true},
        request: {type:String , required:true}
    }, 
    {timestamps:true}


)
module.exports = mongoose.model("Quote", QuoteSchema );