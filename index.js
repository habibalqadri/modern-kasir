const express = require("express");
// const db = require("./config/connection");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello hhahs");
});

app.post("/product", (req, res) => {
  console.log(req.body);
  res.send("testing");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
