const express = require('express');
const router = express.Router();
const 

router.get("/", function (req, res) {
    res.send('Owners Router');
});


module.exports = router;
