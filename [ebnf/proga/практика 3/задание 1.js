app.get('/', function (req, res) {
    res.type('text/plain');
    res.send('Главная страница');
});
app.get('/about', function (req, res) {
    res.type('text/plain');
    res.send('О главной странице');
});
// пользовательская страница 404
app.use(function (req, res, next) {
    res.type('text/plain');
    res.status(404);
    res.send('404 — Не найдено');
});

app.use(express.static(__dirname + '/public'));



