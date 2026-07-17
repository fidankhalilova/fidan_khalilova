const Project = require('../models/Project');

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
const getProjects = async (req, res) => {
    try {
        const projects = await Project.find();

        res.status(200).json({
            success: true,
            count: projects.length,
            data: projects 
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error: ' + error.message
        });
    }
};

// @desc    Create a project (for populating data)
// @route   POST /api/projects
// @access  Public
const createProject = async (req, res) => {
    try {
        const project = await Project.create(req.body);
        res.status(201).json({
            success: true,
            data: project
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            project = await Project.findOne({ _id: id });
        }
        if (!project) {
            return res.status(404).json({
                success: false,
                message: `Project not found with ID: ${id}`
            });
        }
        res.status(200).json({ success: true, data: project });
    } catch(error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

module.exports = {
    getProjects,
    createProject,
    getProjectById
};