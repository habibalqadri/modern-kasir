const db = require("../config/connection");

exports.checkout = async (data, products) => {
  const query = await db
    .query("insert into transactions set ?", [data])
    .catch((err) => {
      return err;
    });

  return query;
};
