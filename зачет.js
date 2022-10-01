const express = require("express");
const fs = require("fs");

const app = express();
const filename = "log.txt";

app.get('/requests', (req, res) => {
    res.send(fs.readFileSync(filename, 'utf-8'));
});

app.get("*", (req, res) => {  
    fs.appendFileSync(filename, `URL :${req.url}\nData :${new Date()}\nIP :${req.ip}\n\n`);
    res.send("OK");
});

app.listen(3000);
//comment