const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "test",
  password: "usbw",
  port: "3307"
});
 connection.execute("SELECT * FROM users",
  function(err, results) {
    console.log(err);
    console.log(results); // собственно данные
});
connection.end();
