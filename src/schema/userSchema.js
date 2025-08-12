const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        trim: true,
        minlength: [2, 'First name must be at least 2 characters long'],
        maxlength: [20, 'First name must be at most 20 characters long'],
        lowercase: true
    },

    lastName: {
        type: String,
        required: [true, 'Last name is required'],
        trim: true,
        minlength: [2, 'Last name must be at least 2 characters long'],
        maxlength: [20, 'Last name must be at most 20 characters long'],
        lowercase: true
    },

    mobileNumber: {
        type: String,
        required: [true, 'Mobile number is required'],
        unique: [true, 'Mobile number is already in use'],
        trim: true,
        minlength: [10, 'Mobile number must be at least 10 characters long'],
        maxlength: [10, 'Mobile number must be at most 10 characters long']
    },

    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email is already in use'],
        trim: true,
        lowercase: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please fill a valid email address']
        },

    password: {
        type: String,
        required: [true, 'Password is required'],
        minleangth: [6, 'Password must be at least 6 characters long'],
    }
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User; 