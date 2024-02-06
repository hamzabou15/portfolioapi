const router = require("express").Router();
const book = require("../models/book");


router.post('/' , async (req , res) => {

    const newBook = new book(req.body);
    try {

        const savedBook = await newBook.save();
        res.status(201).json(savedBook);

    }catch(err) {
        res.status(403).json("you are not allowed")
    }

});

router.get('/:id' , async (req , res) => {

    try {
        const book1 = await book.findById(req.params.id); 
        res.status(200).json(book1);

    }catch(err) {
        res.status(403).json("you are not allowed")
    }

});

router.get('/' , async (req , res) => {

    const typeQuery = req.query.type;
    
    let book1 =[];
    try {
                if(typeQuery) {

                        const book1 = await book.aggregate([
                            {$sample : {size: 40}},
                            {$match: {type:typeQuery }}
                        ]); 
                        res.status(200).json(book1);
               }else  {
                book1 = await  book.find(); 
             }
             res.status(200).json(book1);
    }catch(err) {
    
        console.log("problem in the projects")
    }

});


module.exports = router ;

