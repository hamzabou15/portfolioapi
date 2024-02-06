const router = require("express").Router();
const email = require("../models/email");

// Create a email

router.post('/' , async (req , res) => {

    const newEmail = new email(req.body);

    try {
        const sendEmail = await newEmail.save();
        res.status(201).json(sendEmail);

    }catch(err){
        res.status(403).json("you are not allowed")
    }


    }    )



/// get emails 

    router.get("/" , async (req, res)=> {

        let getEmail = [];
        try {
            const getEmail = await email.find();
            res.status(201).json(getEmail);

        }catch(err) {
            res.status(403).json("you are not allowed")

        }

    })

  

/// delete emails 

router.delete('/:id' , async (req , res) => {

    try {

         const deleteEmail = await email.findByIdAndDelete(req.params.id); 
        res.status(200).json("THE EMAILS HAS BEEN DELETED");

    }catch(err) {
        res.status(403).json("you are not allowed")
    }

});

module.exports = router ;

