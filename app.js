'use strict';
const fs = require("fs");
fs.readFile("hello.txt", "utf8", // асинхронное чтение
       function(error,data){
       console.log("Асинхронное чтение файла");
       if(error) throw error; // если возникла ошибка
       console.log(data);  // выводим считанные данные
});
console.log("Синхронное чтение файла")
let fileContent = fs.readFileSync("hello.txt", "utf8");// синхронное чтение
console.log(fileContent);