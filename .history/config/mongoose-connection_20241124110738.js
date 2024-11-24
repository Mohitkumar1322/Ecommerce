const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/ecommerce")
.then(function(){
    console.log("Database connected");
}).catch(function(err){
    console.log(err);
}