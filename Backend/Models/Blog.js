const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  excerpt: { type: String }, // Chota description cards ke liye
  content: { type: String }, // ISME REAL BLOG TEXT SAVE HOGA (HTML FORMAT MEIN)
  doc_link: { type: String }, // Optional rakho agar backup chahiye toh
  author: { type: String, default: "Acharya Pankaj" },
  category: { type: String },
  image: { type: String }, // Hero section image URL
  views: { type: Number, default: 0 },
  isApproved: { type: Boolean, default: false }, // Writers ke liye approval system
  createdAt: { type: Date, default: Date.now }
});

// Fix: module.exports ko clean rakhein
module.exports = mongoose.model('Blog', BlogSchema);