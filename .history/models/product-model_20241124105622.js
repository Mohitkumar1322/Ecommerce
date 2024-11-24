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
    price:{
        type: Number,
        required: true,
        trim: true
    },
    discount:{
        type: Number,
        default: 0
        
    },
    bgcolor:{
        type: String,
        
       
    },
    panelcolor:{
        type: String,
        
       
    },
    textcolor:{
        type: String,
        
       
    },

 
    
});


module.exports = mongoose.model('pro', productSchema);
