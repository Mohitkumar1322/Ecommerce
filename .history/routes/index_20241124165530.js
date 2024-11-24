const express = require("express");
const router = express.Router();
const isloggedin = require("../middlewares/isLoggedIn");
const ProductModel = require("../models/product-model");
const isLoggedIn = require("../middlewares/isLoggedIn");

router.get("/", function (req, res) {
  let error = req.flash("error");
  res.render("index", { error,isLoggedIn });
});

router.get("/shop", isloggedin, async function (req, res) {
  let products = await ProductModel.find();
  res.render("shop", { products });
});
router.get("/logout", isloggedin, function (req, res) {
    res.render("shop");
  });

module.exports = router;