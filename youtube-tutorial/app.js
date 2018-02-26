
const express = require('express');
const bodyParser = require('body-parser');
const urlEncoded = bodyParser.urlencoded({extended: false});
const app = express();
const path = require('path');

const entriesRoute = require(__dirname + '/server/routes/entriesRoute.js');
const output = require(__dirname + '/server/routes/outputRoute.js');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(urlEncoded);


app.use(express.static(path.join(__dirname, 'statics')));
app.get('/', entriesRoute);
app.post('/', output);










module.exports = app;
