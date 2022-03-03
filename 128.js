const http = require("http");
const requestHandler = (request, response) => {
response.setHeader("Content-Type", "text/html; charset=utf-8;");
if(request.url === "/home" || request.url === "/"){
response.write("<h2>Начало</h2>");
}
else if(request.url == "/about"){
response.write("<h2>Другое</h2>");
}
else if(request.url == "/contact"){
response.write("<h2>Контакты</h2>");
}
else{
response.write("<h2>Нет информации</h2>");
}
response.end();
};
http.createServer(requestHandler).listen(112);
