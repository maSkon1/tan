'use strict';
const fs = require("fs");
let readableStream = fs.createReadStream("hello.txt", "utf8");
let writeableStream = fs.createWriteStream("some.txt");
readableStream.on("data", function(chunk){
    writeableStream.write(chunk);
});