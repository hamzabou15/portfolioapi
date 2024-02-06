const router = require("express").Router();
const List = require("../models/List");



/// CREATE PROJECT

router.post('/' , async (req , res) => {

    const newList = new List(req.body);
    
    try {

        const savedList = await newList.save();
        res.status(201).json(savedList);

    }catch(err) {
        res.status(403).json("you are not allowed")
    }

});



/// DELETE PROJECT
router.delete('/:id' , async (req , res) => {


    try {

        const deleteList = await List.findByIdAndDelete(req.params.id); 
        res.status(200).json("THE LIST OF ¨PROJECTS HAS BEEN DELETED");

    }catch(err) {
        res.status(403).json("you are not allowed")
    }

});

/// GET LIST
router.get('/:id' , async (req , res) => {


    try {

        const list = await List.findById(req.params.id); 
        res.status(200).json(list);

    }catch(err) {
        res.status(403).json("you are not allowed")
    }

});



/// GET ALL LISTS

router.get('/' , async (req , res) => {

    const typeQuery = req.query.type;
    
    let list =[];

    try {
                if(typeQuery) {

                        const list = await List.aggregate([
                            {$sample : {size: 40}},
                            {$match: {type:typeQuery }}
                        ]); 
                        res.status(200).json(list);
               }else {
                list = await  List.find(); 
             }
             res.status(200).json(list);
    }catch(err) {
    
        console.log("problem")
    }

});








module.exports = router ;