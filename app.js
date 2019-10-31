'use strict';
const fs = require("fs");
fs.writeFile("hello.txt", "Hello мир!", function(error){
    if(error) throw error; // если возникла ошибка
    console.log("Асинхронная запись файла завершена. Содержимое файла:");
    let data = fs.readFileSync("hello.txt", "utf8");
    console.log(data);  // выводим считанные данные
});