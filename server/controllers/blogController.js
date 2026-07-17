const Blog = require('../models/Blog');

const getBlogs = async (req, res) => {
    try {
        const blog = await Blog.find();
        res.status(200).json({
            success: true,
            count: blog.length,
            data: blog
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            data: error.message
        });
    }
};

const getBlogById = async (req, res) => {
    try{
        const { id } = req.params;
        const blog = await Blog.findById(req.params.id);
        if(!blog) blog = await Blog.findOne({ _id: id });
        if(!blog) {
            res.status(404).json({
                success: false,
                data: `Blog not found with ID: ${id}`
            })
        }
        res.status(200).json({
            success: true,
            data: blog
        })

    } catch(error) {
        res.status(500).json({
            success: false,
            data: error.message
        })
    }
}

const createBlog = async (req, res) => {
    try {
        if(!req.files || req.files.length() === 0) {
            return res.status(400).json({
                success: false,
                data: "Upload at least one image"
            })
        }
        const imagePaths = req.files.map(file => `/uploads/blogs/${file.filename}`);
        const { title, intro, main, ending, links } = req.body;

        let parsedLinks = [];
        if(links) {
            try {
                parsedLinks = JSON.parse(links);
            } catch (e) {
                parsedLinks = typeof links === 'string' ? links.split(',').map(l => l.trim()) : [];
            }
        }
        const newBlog = new Blog({
            title,
            images: imagePaths,
            content: {
                intro,
                main,
                ending
            },
            parsedLinks,
            likes: 0,
            views: 0
        });
        const savedBlog = await newBlog.save();
        res.status(201).json({
            success: true,
            data: savedBlog
        });
    } catch(error) {
        res.status(500).json({
            success: false,
            error: err.message
        });
    }
}



module.exports = { getBlogs, getBlogById, createBlog }