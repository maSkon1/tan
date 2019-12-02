const mysql = require("mysql2");
const pool = mysql.createPool({
  connectionLimit: 5,
  host: "localhost",
  user: "root",
  database: "test",
  password: "usbw",
  port: "3307"
}); 
pool.end(function(err) {
  if (err) {
    return console.log(err.message);
  }
});