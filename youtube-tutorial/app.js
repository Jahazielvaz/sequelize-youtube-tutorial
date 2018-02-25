
const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const urlEncoded = bodyParser.urlencoded({extended: false});
const app = express();

const entriesRoute = require(__dirname + '/server/routes/entriesRoute.js');

app.set('view engine', 'ejs');
app.use(urlEncoded);
app.use(multer);
app.use(cookieParser);
app.use('/', express.static('./statics'));

module.exports = app.js;

app.get('/' , function(req, res){
  render('entries.ejs')
})

app.listen(4000, function(){
  console.log('Listening to port 4000');
})
