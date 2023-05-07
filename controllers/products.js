//deklarasi db
const db = require("../configs/connection");
/*
Dibagian ini kita akan mengontrol penggunaan dari database menggunakan query.

INGAT!
tidak semua function butuh async await, karna ada juga yg synchronous
*/

//contoh penggunaan function query yang tidak pakai aync
exports.getProduct = () => {
  return db.query("SELECT * FROM products");
};

exports.createProduct = async (data) => {
  //temporary variable 👇
  let response;

  // RAW query untuk insert product dummy 👇
  const query = await db.query("INSERT INTO products set ?", [data]);

  // validasi jika database ada perubahan isi field 👇
  if (query.affectedRows > 0) {
    response = "product successfuly created";
  } else {
    response = "error when inserting product";
  }

  return response;
};
