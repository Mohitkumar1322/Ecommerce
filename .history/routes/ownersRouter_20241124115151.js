const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owners-model');

router.get("/", function (req, res) {
    res.send('Owners Router');
});
if(process.env === "development"){
    console.log("Development mode");
}
router.post("/create", function (req, res) {
    res.send('Owners Router');
});


module.exports = router;
