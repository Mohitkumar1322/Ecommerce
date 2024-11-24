const express = require("express");
const router = express.Router();
const isloggedin = require("../middlewares/isLoggedIn");
const ProductModel = require("../models/product-model");
const isLoggedIn = require("../middlewares/isLoggedIn");
const userModel = require("../models/user-model");

router.get("/", function (req, res) {
  let error = req.flash("error");
  res.render("index", { error,isLoggedIn:false });
});

router.get("/shop", isloggedin, async function (req, res) {
  let products = await ProductModel.find();
  res.render("shop", { products });
});

router.get("/addtocart:id", isloggedin, async function (req, res) {
  let user = await userModel.findOne({user:req.user.email});
  user.cart.push(req.params)


});
  
router.get("/logout", isloggedin, function (req, res) {
    res.render("shop");
  });

module.exports = router;