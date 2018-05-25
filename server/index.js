const express = require('express');
const bodyParser = require('body-parser');
const sqlz = require('./../db');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => console.log('server is running on port ' + PORT));