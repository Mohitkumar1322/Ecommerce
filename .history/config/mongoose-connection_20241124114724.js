const mongoose = require('mongoose');
const config = require('config');
const dbgr = require("debug")("development:mongoose");



mongoose.connect(``)
.then(function(){
    dbgr("Database connected");
}).catch(function(err){
    dbgr(err);
})

module.exports = mongoose.connection;