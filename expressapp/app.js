'use strict';
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "usersdb2",
  password: "usbw",
  port: "3307"
}); 
const sql = "DELETE FROM users WHERE name=?";
const data = ["Sam"]; // удаляем пользователей с именем Sam
connection.query(sql, data, function(err, results) {
    if(err) console.log(err);
    console.log(results);
});
connection.end();
