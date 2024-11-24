const express = require('express');
const router = express.Router();
const userModel = require('../models/user-model');

router.get("/", function (req, res) {
    res.send('Owners Router');
});

router.post("/register", async function (req, res) {
    try{
    let { fullname, email, password } = req.body;

    let user = await userModel.create({
        email,
        password,
        fullname,
    });
    }catch (err){
        console.log(err);
    }
});

module.exports = router;