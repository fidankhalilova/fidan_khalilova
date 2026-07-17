const express = require('express');
const router = express.Router();
const { getSkills, createSkill } = require('../controllers/skillsController');

router.route('/')
    .get(getSkills)
    .post(createSkill);

module.exports = router;