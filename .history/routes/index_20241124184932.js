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
  let success = req.flash("success");
  res.render("shop", { products, success });
});

router.get("/cart", isloggedin, async function (req, res) {
  let user = await userModel
  .findOne({ email: req.user.email })
  .populate("cart", { user, });
  const bill = (Number(user.cart[0].price)+20)-Number(discount);

  
  res.render("cart");
});

router.get("/addtocart/:id", isloggedin, async function (req, res) {
  let user = await userModel.findOne({email:req.user.email});
  user.cart.push(req.params.productid);
  await user.save();
  req.flash("success", "Product added to cart");
  res.redirect("/shop");


});
  
router.get("/logout", isloggedin, function (req, res) {
    res.render("shop");
  });

module.exports = router;