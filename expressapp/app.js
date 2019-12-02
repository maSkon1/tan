const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "test",
  password: "usbw",
  port: "3307"
}).promise();
connection.query("SELECT * FROM users")
          .then(result =>{
            console.log(result[0]);
          })
          .catch(err =>{
            console.log(err);
          });
