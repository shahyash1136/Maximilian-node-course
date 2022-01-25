const express = require("express");
const productsConttroller = require("../controllers/products");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", productsConttroller.getAddProduct);

// /admin/add-product => POST
router.post("/add-product", productsConttroller.postAddProduct);

module.exports = router;
