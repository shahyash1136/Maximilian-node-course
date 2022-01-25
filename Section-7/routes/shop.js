const express = require("express");
const productsConttroller = require("../controllers/products");

const router = express.Router();

router.get("/", productsConttroller.getProducts);

module.exports = router;
