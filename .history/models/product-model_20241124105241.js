//creating the user model schema
const mongoose = require('mongoose');



const productSchema = new mongoose.Schema({
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
