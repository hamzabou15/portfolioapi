const mongoose = require('mongoose');

const BookSchema =  new mongoose.Schema(
    {
        title : {type : String , required:true},
        desc : {type:String , required:true},
        img:{type:String , required:true },
        type:{type:String , required:true},
        link:{type:String , required:true},
    },
    {timestamps: true}
);
module.exports = mongoose.model("Book" ,BookSchema )