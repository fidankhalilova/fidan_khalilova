const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    images: {
        type: [String],
        required: true,
        trim: true
    },
    content: {
        intro: { type: String, required: true, trim: true },
        main: { type: String, required: true, trim: true },
        ending: { type: String, required: true, trim: true }
    },
    links: {
        type: [String],
        required: true,
        trim: true
    },
    likes: {
        type: Number,
        required: true,
        trim: true
    },
    views: {
        type: Number,
        required: true,
        trim: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Blog', BlogSchema);