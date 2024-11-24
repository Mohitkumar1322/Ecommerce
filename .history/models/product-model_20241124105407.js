//creating the user model schema
const mongoose = require('mongoose');



const productSchema = new mongoose.Schema({
    image:{
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    price
 
    
});


module.exports = mongoose.model('User', productSchema);
