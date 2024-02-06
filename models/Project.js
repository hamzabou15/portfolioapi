const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema(


    {
        title : {type:String  , required: true , unique:true},
        type:{type:String},
        desc:{type:String},
        img1:{type:String},
        img2:{type:String},
        img3:{type:String},
        category : {type:String},
        year : {type:Number},
        infos : {type:String },
        website : {type:String},
        developement : {type: String},
        technologies :{type:Array},
        point:{type:Array}
    }, 
    {timestamps: true}


);
module.exports = mongoose.model("Project" ,ProjectSchema )