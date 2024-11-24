//creating the user model schema
const mongoose = require('mongoose');



const productSchema = new mongoose.Schema({
    image:{
        type: String,
        required: true,
        trim: true
    },
    
 
    
});


module.exports = mongoose.model('User', productSchema);
