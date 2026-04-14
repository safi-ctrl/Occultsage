const express = require('express');
const router = express.Router();
const User = require('../models/User'); // User model ko import kiya

// 1. Test Route (Sirf check karne ke liye ki routes chal rahe hain)
// URL: http://localhost:5000/api/users/test
router.get('/test', (req, res) => {
    res.json({ message: "User route ekdam sahi kaam kar raha hai!" });
});

// 2. Register Route (Data database mein save karne ke liye)
// URL: http://localhost:5000/api/users/register
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Naya user create karein
        const newUser = new User({ username, email, password });
        
        // Database mein save karein
        await newUser.save();

        res.status(201).json({ 
            success: true, 
            message: "User successfully register ho gaya!",
            user: { id: newUser._id, username: newUser.username, email: newUser.email }
        });
    } catch (error) {
        res.status(400).json({ 
            success: false, 
            message: "Registration fail ho gaya", 
            error: error.message 
        });
    }
});

module.exports = router;