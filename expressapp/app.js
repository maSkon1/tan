const mysql = require("mysql2");
const pool = mysql.createPool({
  connectionLimit: 5,
  host: "localhost",
  user: "root",
  database: "test",
  password: "usbw",
  port: "3307"
});
pool.query("SELECT * FROM users", function(err, results) {
    if(err) console.log(err);
    console.log(results);
});
pool.end(function(err) {
  if (err) {
    console.log(err.message);
  }
  console.log("пул закрыт");
});