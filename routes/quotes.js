const router = require("express").Router();
const Quote = require("../models/Quotes");

router.post("/" ,  async (req, res) => {

    const newQuote = new Quote(req.body);

    try {
        const savedQuote = await  newQuote.save();
        res.status(201).json(savedQuote);

    }
    catch(err) {
        res.status(403).json("data not allowed")
    }

}

 )

 
 module.exports = router ;