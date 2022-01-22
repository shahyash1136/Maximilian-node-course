const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;
  console.log(products);
  //Pug
  /* res.render("shop", {
    prods: products,
    docTitle: "SHOP",
    path: "/",
  }); */

  //Handlebars
  res.render("shop", {
    hasProducts: products.length > 0,
    prods: products,
    docTitle: "SHOP",
    path: "/",
  });
  //res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
