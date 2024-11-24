//creating the user model schema
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");

const ownerSchema = new mongoose.Schema({
    fullname: {
        type: String,
       
        
    },
    email: {
        type: String,
        
        
    },
    password: {
        type: String,
        
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
        
        
    }
    
});


module.exports = mongoose.model('owner', ownerSchema);
