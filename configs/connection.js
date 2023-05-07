const mysql = require("mysql2");

//konfigurasi database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin123",
  database: "pos_db",
});

connection.connect((err) => {
  if (err) {
    console.log("err");
  }

  console.log("Connected");
});
module.exports = connection;
