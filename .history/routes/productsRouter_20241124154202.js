const express = require("express");
const router = express.Router();
const upload = require("../config/multer-config");
const productModel = require("../models/product");

router.get("/products/create",upload.single("image"), function (req, res) {
  res.send(req.file)
});

module.exports = router;