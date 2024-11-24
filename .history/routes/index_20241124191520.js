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
    .populate("cart");

  if (!user.cart || user.cart.length === 0) {
    // If the cart is empty, set the bill to 0 or handle accordingly
    return res.render("cart", { user, bill: 0 });
  }

  // Calculate bill only if cart has items
  const bill = Number(user.cart[0].price) + 20 - Number(user.cart[0].discount);

  res.render("cart", { user, bill });
});

router.get("/addtocart/:id", isloggedin, async function (req, res) {
  let user = await userModel.findOne({email:req.user.email});
  user.cart.push(req.params.id);
  await user.save();
  req.flash("success", "Product added to cart");
  res.redirect("/shop");


});
  
router.get("/logout", isloggedin, function (req, res) {
    res.render("shop");
  });

module.exports = router;