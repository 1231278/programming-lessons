const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'form.html'));
});

app.post('/sendform', (req, res) => {
    const form = formidable({
        multiples: true,
        keepExtensions: true,
        filename: (name, ext) => name+ext,
    });
    form.parse(req);
    res.redirect('/');
});

app.listen(3000, () => console.log('Ok'));