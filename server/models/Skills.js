const mongoose = require('mongoose');

const SkillsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 10
    },
    iconName: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Skills', SkillsSchema);