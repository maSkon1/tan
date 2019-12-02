const mysql = require("mysql2");
const pool = mysql.createPool({
  connectionLimit: 5,
  host: "localhost",
  user: "root",
  database: "test",
  password: "usbw",
  port: "3307"
}).promise();
pool.execute("UPDATE users SET age=age+1 WHERE name=?", ["Stan"]) // изменение объектов
    .then(result =>{ 
      console.log(result[0]);
      return pool.execute("SELECT * FROM users"); // получение объектов
    })
    .then(result =>{
      console.log(result[0]);
      pool.end();
    })
    .then(()=>{
      console.log("пул закрыт");
    })
    .catch(function(err) {
      console.log(err.message);
    });
