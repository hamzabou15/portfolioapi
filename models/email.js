const mongoose = require('mongoose');

const EmailSchema =  new mongoose.Schema(
    {
        name : {type : String , required:true},
        email : {type:String , required:true},
        phone:{type:String },
        details:{type:String}
    },
    {timestamps: true}
);
module.exports = mongoose.model("Email" ,EmailSchema )