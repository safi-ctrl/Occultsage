const mongoose = require('mongoose');

// Schema design
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username zaroori hai"], // Validation
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true, // Do users ka email same nahi ho sakta
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    role: {
        type: String,
        default: "user" // Default value
    }
}, { timestamps: true }); // Isse 'createdAt' aur 'updatedAt' apne aap ban jayenge

// Model export
module.exports = mongoose.model('User', userSchema);