const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "usersdb2",
  password: "usbw",
  port: "3307"
});
const users = [
  ["Bob", 22],
  ["Alice", 25],
  ["Kate", 28]
];
const sql = `INSERT INTO users(name, age) VALUES ?`;
connection.query(sql, [users], function(err, results) {
    if(err) console.log(err);
    console.log(results);
});