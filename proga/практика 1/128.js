const fs = require("fs");
const gm = require('gm');
const http = require("http");

gm("sample_image.jpg")
    .resize(600, 200, '!')
    .write('1.jpg', function (err) {
        if(err) console.log(err);
        console.log("Done!")
    });

const requestHandler = (request, response) => {
response.setHeader("Content-Type", "text/html; charset=utf-8;");
if(request.url === "/home" || request.url === "/"){
response.write("<h2>Начало</h2>");
fs.appendFileSync("hello.txt",'переход в home\n' );
}
else if(request.url == "/about"){
response.write("<h2>Другое</h2>");
fs.appendFileSync("hello.txt",'переход в about\n' );
}
else if(request.url == "/contact"){
response.write("<h2>Контакты</h2>");
fs.appendFileSync("hello.txt",'переход в contact\n' );
}
else if(request.url == "/1"){
gm.ReadableStream()     
}
else{
response.write("<h2>404</h2>");
response.write("<h2>Нет информации</h2>");
fs.appendFileSync("hello.txt",'переход в ошибку\n' );
}
response.end();
};
http.createServer(requestHandler).listen(112);
