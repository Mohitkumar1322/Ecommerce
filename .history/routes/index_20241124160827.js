const express = require("express");
const router = express.Router();
const isloggedin = require("../middlewares/isLoggedIn");
const ProductModel = require("../models/ProductModel");

router.get("/", function (req, res) {
  let error = req.flash("error");
  res.render("index", { error });
});

router.get("/shop", isloggedin, function (req, res) {
  let await 
  res.render("shop");
});
router.get("/logout", isloggedin, function (req, res) {
    res.render("shop");
  });

module.exports = router;