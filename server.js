// server.js

const express = require('express');
const bodyParser = require('body-parser');
const { textToBinary, binaryToText } = require('./textBinaryConverter');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/textToBinary', (req, res) => {
    const text = req.body.text;
    const binary = textToBinary(text);
    res.send(`Binary: ${binary}`);
});

app.post('/binaryToText', (req, res) => {
    const binary = req.body.binary;
    const text = binaryToText(binary);
    res.send(`Text: ${text}`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
