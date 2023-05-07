const mysql = require("mysql2");
const env = require("dotenv");
const util = require("util");

env.config();
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin123",
  database: "pos_db",
});

connection.query = util.promisify(connection.query).bind(connection);

connection.connect((err) => {
  if (err) {
    console.log("error", err);
  } else {
    console.log("connected");
  }
});

module.exports = connection;
