const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    docTitle: "Add New Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop", {
      hasProducts: products.length > 0,
      prods: products,
      docTitle: "SHOP",
      path: "/",
    });
  });
  //res.sendFile(path.join(rootDir, "views", "shop.html"));
};
