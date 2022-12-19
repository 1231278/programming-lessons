const http = require("http");

const fs = require("fs");
const requestHandler = (request, response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8;");

    if (request.url === "/home" || request.url === "/") {
        response.write("<h2>Home</h2>");
    } else if (request.url == "/about") {
        response.write("<h2>About</h2>");
    } else if (request.url == "/contact") {
        response.write("<h2>Contacts</h2>");
    } 
    else if (request.url == "/requests") {
        let content = fs.readFileSync("log.txt");
        response.writeHead(200)
        response.end(content);
    }else {
        response.write("<h2>Not found</h2>");
    }
    response.end();

    console.log("Url: " + request.url);
    console.log("Тип запроса: " + request.method);
    console.log("User-Agent: " + request.headers);
    console.log("Все заголовки");
    console.log(request.headers);
    let log = JSON.stringify(request.headers);
    log=request.url;
    
    fs.appendFileSync("log.txt", request.url);
    
    console.log("Запись файла завершена. Содержимое файла:");

};
http.createServer(requestHandler).listen(3000);