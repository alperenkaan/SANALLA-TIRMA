const express = require('express');
const bodyParser = require('body-parser');
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

function textToBinary(text) {
    return text.split('').map(char => char.charCodeAt(0).toString(2)).join(' ');
}

function binaryToText(binary) {
    return binary.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
}

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
