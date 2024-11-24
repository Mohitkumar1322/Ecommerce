const mongoose = require('mongoose');
const config = require('config');
const dbgr = require("debug")("development:mongoose");



mongoose.connect(`${config.get("MONGODB_URI")}/ec`)
.then(function(){
    dbgr("Database connected");
}).catch(function(err){
    dbgr(err);
})

module.exports = mongoose.connection;