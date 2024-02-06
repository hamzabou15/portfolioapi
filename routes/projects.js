const router = require("express").Router();
const Project = require("../models/Project");



/// CREATE PROJECT

router.post('/' , async (req , res) => {

    const newProject = new Project(req.body);

    try {

        const savedProject = await newProject.save();
        res.status(201).json(savedProject);

    }catch(err) {
        res.status(403).json("you are not allowed")
    }

});

/// UPDATE PROJECT
router.put('/:id' , async (req , res) => {

    try {
        const updateProject = await Project.findByIdAndUpdate(req.params.id , {
            $set: req.body,
        },
        {new:true});
        res.status(200).json(updateProject);

    }catch(err) {
        res.status(403).json("you are not allowed")
    }

});
/// DELETE PROJECT
router.delete('/:id' , async (req , res) => {


    try {

        const deleteProject = await Project.findByIdAndDelete(req.params.id); 
        res.status(200).json("THE PROJECT HAS BEEN DELETED");

    }catch(err) {
        res.status(403).json("you are not allowed")
    }

});




/// GET PROJECT
router.get('/:id' , async (req , res) => {


    try {

        const project = await Project.findById(req.params.id); 
        res.status(200).json(project);

    }catch(err) {
        res.status(403).json("you are not allowed")
    }

});



/// GET ALL PROJECT

router.get('/', async (req, res) => {
    const typeQuery = req.query.type;
  
        try {
            let projects;
            
                if (typeQuery) {
                      projects = await Project.find({ type: typeQuery }).sort({ createdAt: -1 });
                } else {
                      projects = await Project.find().sort({ createdAt: -1 });
                }
        
            res.status(200).json(projects);
        } catch (err) {
        res.status(404).json({ message: "Problem fetching data", err });
        }
});



module.exports = router ;