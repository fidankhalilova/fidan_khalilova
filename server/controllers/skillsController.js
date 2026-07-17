const Skills = require('../models/Skills');

const getSkills = async (req, res) => {
    try {
        const skills = await Skills.find();

        res.status(200).json({
            success: true,
            count: skills.length,
            data: skills
        });
    } catch(error) {
        res.status(500).json({
            success: false,
            data: `Server Error: ` + error.message
        })
    }
}

const createSkill = async (req, res) => {
    try {
        const skill = await Skills.create(req.body);
        res.status(201).json({
            success: true,
            data: skill
        })
    } catch(error) {
        res.status(400).json({
            success: false,
            data: error.message
        })
    }
}

module.exports = { getSkills, createSkill }