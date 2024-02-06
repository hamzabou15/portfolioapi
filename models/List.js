const mongoose = require('mongoose');

const ListtSchema = new mongoose.Schema(

    {
        title: {type:String  , required:true , unique:true},
        type:{type:String},
        content : {type:Array}
    }, 
    {timestamps: true}
    


);

module.exports = mongoose.model("List" ,ListtSchema )