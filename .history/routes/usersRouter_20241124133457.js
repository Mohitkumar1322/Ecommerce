const express = require('express');
const router = express.Router();

router.get("/", function (req, res) {
    res.send('Owners Router');
});

router.post("/register", async function (req, res) {
    let { fullname, email, password } = req.body;

    awa
});

module.exports = router;