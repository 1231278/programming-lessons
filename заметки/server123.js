const express = require('express')
const path = require('path');
const PORT = 5545;
const ROOT = path.join(__dirname);

const app = express();

app.use(express.static(path.join(ROOT, '/')));
app.use(express.urlencoded({
extended: false
}));
app.get('/', (req, res) => {
let id = req.params.id;
console.log(id);
res.sendFile(path.join(ROOT, 'zametki.html'));
});

app.post("/login",function (request, response) {
if (!request.body) return response.sendStatus(400);
console.log(request.body);
});

app.listen(PORT, () => console.log('СУРВЕРОК ЗАПУЩЕН'))