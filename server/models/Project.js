const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        overview: { type: String, required: true, trim: true },
        challenge: { type: String, required: true, trim: true },
        solution: { type: String, required: true, trim: true },
        outcome: { type: String, required: true, trim: true },
    },
    tags: {
        type: [String],
        default: []
    },
    technologies: {
        type: [String],
        default: []
    },
    image: {
        type: String,
        required: [true, 'Please upload a project thumbnail/image']
    },
    likes: {
        type: Number,
        default: 0
    },
    views: {
        type: Number,
        default: 0
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Project', ProjectSchema);