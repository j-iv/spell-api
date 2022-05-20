const express = require('express')
const app = express()
require('dotenv').config()
const fs = require('fs')

let port = process.env.PORT

if (port == null || port == "") {
    port = 8000;
  }

app.get('/', (req,res) => {
    res.end('Hello World!');
});

app.listen(port, () => {
    console.log('app is listening on port ' + port);
});

app.get('/list_spells', (req,res) => {
    fs.readFile(__dirname + '/data.json', 'utf8', (err, data) => {
        res.end(data);
    })})

app.get('/health', (req,res) => {
    res.status(200).end('OK');
    }
)
