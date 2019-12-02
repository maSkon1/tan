const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "test",
  password: "usbw",
  port: "3307"
});
const user = ["Tom", 29];
const sql = "INSERT INTO users(name, age) VALUES(?, ?)";
 connection.query(sql, user, function(err, results) {
    if(err) console.log(err);
    else console.log("Данные добавлены"); }); 
connection.end();

