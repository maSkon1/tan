const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "test",
  password: "usbw",
  port: "3307"
});
connection.query("CREATE DATABASE usersdb2",
  function(err, results) {
    if(err) console.log(err);
    else console.log("База данных создана");
});
connection.end();