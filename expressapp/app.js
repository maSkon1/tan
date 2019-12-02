'use strict';
const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");
 
const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false});
 
const pool = mysql.createPool({
  connectionLimit: 5,
  host: "localhost",
  user: "root",
  database: "usersdb2",
  password: "usbw",
  port: "3307",
});
 
app.set("view engine", "hbs");
 
// ��������� ������ �������������
app.get("/", function(req, res){
    pool.query("SELECT * FROM users", function(err, data) {
      if(err) return console.log(err);
      res.render("index.hbs", {
          users: data
      });
    });
});
// ���������� ����� ��� ���������� ������
app.get("/create", function(req, res){
    res.render("create.hbs");
});
// �������� ������������ ������ � ��������� �� � �� 
app.post("/create", urlencodedParser, function (req, res) {
         
    if(!req.body) return res.sendStatus(400);
    const name = req.body.name;
    const age = req.body.age;
    pool.query("INSERT INTO users (name, age) VALUES (?,?)", [name, age], function(err, data) {
      if(err) return console.log(err);
      res.redirect("/");
    });
});
 
// ������� id �������������� ������������, �������� ��� �� �� � ��������� � ������ ��������������
app.get("/edit/:id", function(req, res){
  const id = req.params.id;
  pool.query("SELECT * FROM users WHERE id=?", [id], function(err, data) {
    if(err) return console.log(err);
     res.render("edit.hbs", {
        user: data[0]
    });
  });
});
// �������� ����������������� ������ � ���������� �� � ��
app.post("/edit", urlencodedParser, function (req, res) {
         
  if(!req.body) return res.sendStatus(400);
  const name = req.body.name;
  const age = req.body.age;
  const id = req.body.id;
   
  pool.query("UPDATE users SET name=?, age=? WHERE id=?", [name, age, id], function(err, data) {
    if(err) return console.log(err);
    res.redirect("/");
  });
});
 
// �������� id ���������� ������������ � ������� ��� �� ��
app.post("/delete/:id", function(req, res){
          
  const id = req.params.id;
  pool.query("DELETE FROM users WHERE id=?", [id], function(err, data) {
    if(err) return console.log(err);
    res.redirect("/");
  });
});
 
app.listen(3000, function(){
  console.log("������ ������� �����������...");
});
    res.redirect("/");
  });
});
 
// получаем id удаляемого пользователя и удаляем его из бд
app.post("/delete/:id", function(req, res){
          
  const id = req.params.id;
  pool.query("DELETE FROM users WHERE id=?", [id], function(err, data) {
    if(err) return console.log(err);
    res.redirect("/");
  });
});
 
app.listen(3000, function(){
  console.log("Сервер ожидает подключения...");
});