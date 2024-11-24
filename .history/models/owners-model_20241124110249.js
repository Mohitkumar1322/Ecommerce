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
    
    
    products:{
        type: Array,
        default: [],
    },
    
    picture:{
        type: String,
       
    },
    gstin:{
        type: String,
        required: true,
        trim: true
    }
    
});


module.exports = mongoose.model('owner', userSchema);
