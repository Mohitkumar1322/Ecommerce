const express = require("express");
const router = express.Router();
const upload = require("../config/multer-config");

router.get("/create", function (req, res) {
  res.send("hey it's working");
});

module.exports = router;