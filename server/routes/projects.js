const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// GET all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new project (optional, for admin usage later)
router.post('/', async (req, res) => {
    const project = new Project({
        projectName: req.body.projectName,
        projectImage: req.body.projectImage,
        tags: req.body.tags,
    });

    try {
        const newProject = await project.save();
        res.status(201).json(newProject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
