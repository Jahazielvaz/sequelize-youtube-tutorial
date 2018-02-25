
const express = require('express');
const bodyParser = require('body-parser');
const urlEncoded = bodyParser.urlencoded({extended: false});
const app = express();
const path = require('path');

const entriesRoute = require(__dirname + '/server/routes/entriesRoute.js');


app.set('view engine', 'ejs');
app.use(urlEncoded);
app.use('*', express.static('./statics'));

module.exports = app.js;

app.set('/', entriesRoute);

app.listen(4000, function(){
  console.log('Listening to port 4000');
})
