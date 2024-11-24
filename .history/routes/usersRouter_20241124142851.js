const express = require('express');
const router = express.Router();
const userModel = require('../models/user-model');
const bcrypt = require('bcrypt');

router.get("/", function (req, res) {
    res.send('Owners Router');
});

router.post("/register", async function (req, res) {
    try{
    let { fullname, email, password } = req.body;
    bcrypt.genSalt(10,function(err,salt){
        bcrypt.hash(paswprd,salt,function(err,hash){
            if(err){
                console.log(err.message);
            }
            password = hash;
        }
    
    })

    let user = await userModel.create({
        email,
        password,
        fullname,
    });
    res.send(user);
    }catch (err){
        console.log(err.message);
        
    }
});

module.exports = router;