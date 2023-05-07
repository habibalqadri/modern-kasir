const express = require("express");
const products = express.Router();
const { getProduct, createProduct } = require("../controllers/products");

//funtion untuk get semua list produk
products.route("/").get(async (req, res) => {
  res.send(await getProduct());
});

//function untuk create produk
products.route("/").post(async (req, res) => {
  const { name, price, stock } = req.body;

  const data = {
    name,
    price,
    stock,
  };

  res.send(await createProduct(data));
});

module.exports = products;
