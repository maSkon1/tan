const mysql = require("mysql2");
const pool = mysql.createPool({
  connectionLimit: 5,
  host: "localhost",
  user: "root",
  database: "test",
  password: "usbw",
  port: "3307"
});
// добавление объекта
const sql = "INSERT INTO users (name, age) VALUES(?, ?) ";
const data = ["Bill", 25];
pool.query(sql, data, function(err, results) {
  if(err) console.log(err);
  console.log(results);
});
// получение объектов
pool.query("SELECT * FROM users", function(err, results) {
    if(err) console.log(err);
    console.log(results);
}); 