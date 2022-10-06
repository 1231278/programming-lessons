const express = require('express');
const formidable = require('formidable');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'form.html'));
});

app.post('/sendform', (req, res) => {
    const form = formidable({
        multiples: true,
        uploadDir: path.join(__dirname, 'uploads'),
        keepExtensions: true,
        filename: (name, ext) => name+ext,
    });
    form.parse(req);
    res.redirect('/');
});

app.listen(3000, () => console.log('Ok'));