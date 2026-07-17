const express = require('express');
const router = express.Router();
const { getBlogs, getBlogById, createBlog } = require('../controllers/blogController');
const upload = require('../config/multer')

router.get('/', getBlogs);
router.get('/:id', getBlogById);
router.post('/', upload.array('images', 10), createBlog);

module.exports = router;