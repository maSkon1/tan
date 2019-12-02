const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "test",
  password: "usbw",
  port: "3307"
});
connection.query("SELECT * FROM users",
  function(err, results, fields) {
    console.log(err);
    console.log(results); // собственно данные
    console.log(fields); // мета-данные полей 
});
connection.end();

