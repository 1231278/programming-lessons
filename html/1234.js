const express = require('express')
const path = require('path');
const fs = require('fs').promises;
const formidable = require('formidable');
const path = require('path');



const PORT = 5545;
const ROOT = path.join(__dirname);

const app = express();

app.use(express.urlencoded({
    extended: false
}));
app.use('/static', express.static(path.join(ROOT, 'static')));
app.get('/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);
    res.sendFile(path.join(ROOT, id + '.html'));

});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'form.html'));
});

app.post('/sendform', (req, res) => {
    const form = formidable({
        multiples: true,
        uploadDir: path.join(__dirname, 'uploads'),
        keepExtensions: true,
        filename: (name, ext) => name + ext,
    });
    form.parse(req);
    res.redirect('/');
});


app.get('*', (req, res) => {
    res.send('404 ERROR')
});

app.listen(PORT, () => console.log('Server has started!'))