const express = require("express");
const router = express.Router();
const upload = require("../config/multer-config");
const productModel = require("../models/product-model");


router.post("create", upload.single("image"),asyn)
module.exports = router;