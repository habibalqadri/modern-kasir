const express = require("express");
const products = express.Router();
const db = require("../config/connection");
const { getProducts, createProduct } = require("../controllers/products");

products.route("/").get(async (req, res) => {
  res.send(await getProducts());
});

products.route("/create").post(async (req, res) => {
  const { name, price, stock } = req.body;
  const data = {
    name,
    price,
    stock,
  };

  res.send(await createProduct(data));
});

module.exports = products;
