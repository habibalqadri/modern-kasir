const db = require("../config/connection");

exports.getProducts = async () => {
  const productList = await db.query("SELECT * FROM products");
  return productList;
};

exports.createProduct = async (data) => {
  const query = await db.query("insert into products set ?", [data]);
  if (!query.affectedRows) return "error when inserting product";
  return "product successfuly created";
};
