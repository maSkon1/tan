const http = require("http");
http.createServer(function(request,response){ш
    response.end("Hello NodeJS!");
}).listen(3030, "127.0.0.1",function(){
    console.log("Сервер начал прослушивание запросов на порту 3000");
});