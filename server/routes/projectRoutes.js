const express = require('express');
const router = express.Router();
const { getProjects, createProject, getProjectById } = require('../controllers/projectController');

router.route('/')
    .get(getProjects)
    .post(createProject);

router.get("/:id", getProjectById);

module.exports = router;