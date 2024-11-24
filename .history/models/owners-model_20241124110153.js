//creating the user model schema
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");

const ownerSchema = new mongoose.Schema({
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
    
    isadmin: {
        type: Boolean,
        default: false
    },
    orders:{
        type: Array,
        default: []
    },
    contact:{
        type: Number,
        required: true,
        trim: true
    },
    picture:{
        type: String,
       
    },
    
});


module.exports = mongoose.model('User', userSchema);
