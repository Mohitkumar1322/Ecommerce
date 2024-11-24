const express = require('express');
const router = express.Router();
const userModel = require('../models/user-model');

router.get("/", function (req, res) {
    res.send('Owners Router');
});

router.post("/register", async function (req, res) {
    let { fullname, email, password } = req.body;

    await userModel.create({
        email
    })
});

module.exports = router;