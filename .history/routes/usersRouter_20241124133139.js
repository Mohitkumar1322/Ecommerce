const express = require('express');
const router = express.Router();

router.get("/", function (req, res) {
    res.send('Owners Router');
});

router.post("/register", function (req, res) {
    let { fullname, email, password } = req.body;
});

module.exports = router;