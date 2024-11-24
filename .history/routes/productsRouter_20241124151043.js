const express = require("express");
const router = express.Router();

router.get("/create", function (req, res) {
  res.send("hey it's working");
});

module.exports = router;