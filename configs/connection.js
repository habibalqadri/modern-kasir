const mysql = require("mysql2");
const util = require("util");

//konfigurasi database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin123",
  database: "pos_db",
});

//agar query dapat berjalan secara synchronous maka ditambahkan promisify
connection.query = util.promisify(connection.query).bind(connection);

connection.connect((err) => {
  if (err) {
    console.log("err");
  }

  console.log("Connected");
});

module.exports = connection;
