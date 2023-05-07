const express = require("express");
const app = express();
const port = 3000;

//import body parser
const bodyParser = require("body-parser"); //digunakan untuk menerima json dari body request
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//test post
// app.post("/tes-post", (req, res) => {
//   console.log(req.body);
//   res.send("berhasil ngepost");
// });

//import product router
const products = require("./routers/products");

//memakai resource products
app.use("/products", products);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
