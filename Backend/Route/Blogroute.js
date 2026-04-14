const express = require('express');
const router = express.Router();
const Blog = require('../Models/Blog');

// 1. ALL BLOGS (For Blog Listing Page)
router.get('/all', async (req, res) => {
    try {
        const blogs = await Blog.find({ isApproved: true }).sort({ createdAt: -1 });
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ message: "Error fetching blogs", error: err.message });
    }
});

// 2. SIDEBAR DATA (Latest & Trending)
router.get('/sidebar-data', async (req, res) => {
    try {
        const latest = await Blog.find({ isApproved: true }).sort({ createdAt: -1 }).limit(3);
        const trending = await Blog.find({ isApproved: true }).sort({ views: -1 }).limit(3);
        res.json({ latest, trending });
    } catch (err) {
        res.status(500).json({ message: "Error fetching sidebar", error: err.message });
    }
});

// 3. FETCH SINGLE BLOG (Critical Fix)
router.get('/:id', async (req, res) => {
    try {
        // Hum check kar rahe hain ki ID MongoDB ki hai ya Google Doc link ki
        const blog = await Blog.findOne({ 
            $or: [
                { _id: req.params.id.match(/^[0-9a-fA-F]{24}$/) ? req.params.id : null }, 
                { doc_link: { $regex: req.params.id } }
            ]
        });

        if (!blog) {
            return res.status(404).json({ message: "Bhai, ye blog database mein nahi hai!" });
        }

        // Views increment kar rahe hain trending feature ke liye
        blog.views = (blog.views || 0) + 1;
        await blog.save();

        res.json(blog);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

// 4. ADD NEW BLOG (Admin Panel)
router.post('/add', async (req, res) => {
    try {
        const newBlog = new Blog(req.body);
        const savedBlog = await newBlog.save();
        res.status(201).json({ success: true, data: savedBlog });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
});

module.exports = router;