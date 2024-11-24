const express = require('express');
const router = express.Router();
const userModel = require('../models/user-model');
const bcrypt = require('bcryptjs');

router.get("/", function (req, res) {
    res.send('Owners Router');
});

router.post("/register", async function (req, res) {
    try{
    let { fullname, email, password } = req.body;
    bcrypt.gen

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