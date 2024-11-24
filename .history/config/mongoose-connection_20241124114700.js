const mongoose = require('mongoose');
const config = require('config');
const dbgr = require("debug")("development:mongoose");



mongoose.connect("mongodb://127.0.0.1:27017/ecommerce")
.then(function(){
    dbgr("Database connected");
}).catch(function(err){
    dbgr(err);
})

module.exports = mongoose.connection;