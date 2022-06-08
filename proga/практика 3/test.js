var express = require('express');

var app = express();

app.get('/', function(request, response){
    console.log(request.url);
    response.send('<h1>Hello, world!</h1>');
});

app.get('/about', function(request, response){
    console.log(request.url);
    response.send('</h1>About page<h1>');
});

app.get('/products', function(request, response){
    console.log(request.url);
    response.send('</h1>Products Page<h1>');
});

app.listen(8080);