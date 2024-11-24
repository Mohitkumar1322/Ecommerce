const mongoose = require('mongoose');
const debug = require('debug')('app:mongoose-connection');



mongoose.connect("mongodb://127.0.0.1:27017/ecommerce")
.then(function(){
    console.log("Database connected");
}).catch(function(err){
    console.log(err);
})

module.exports = mongoose.connection;