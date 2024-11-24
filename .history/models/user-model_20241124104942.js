//creating the user model schema
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    cart:{
        type: Array,
        default: []
    },
    is
    
})