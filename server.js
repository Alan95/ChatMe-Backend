const PORT = 5000;
HOST = '0.0.0.0';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/user', (req, res) => {
    res.json(req.body);
});

app.listen(PORT, HOST);
console.log(`Running on https://${HOST}:${PORT}`);