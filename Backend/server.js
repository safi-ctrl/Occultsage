const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Routes import karein
const userRoutes = require('./Route/userRoutes');
const Blogroute = require('./Route/Blogroute'); // Naya blog route import kiya

const app = express();

// --- Middlewares ---
app.use(express.json()); 
app.use(cors());         

// --- MongoDB Connection ---
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch(err => console.log("❌ DB Connection Error:", err));

// --- API Routes ---

// User related routes (Login/Register)
app.use('/api/users', userRoutes);

// Blog related routes (Trending, Latest, View Count)
// Isse aapka sidebar data '/api/blogs/sidebar-data' par milega
app.use('/api/blogs', Blogroute); 

// --- Basic Health Check Route ---
app.get('/', (req, res) => {
    res.send("Occultsage Professional Backend is Live!");
});

// --- Server Start ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});