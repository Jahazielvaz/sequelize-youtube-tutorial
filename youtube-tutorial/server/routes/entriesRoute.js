

module.exports = function(app){
app.get('/', function(req, res){
  console.log('This route working fine');
  res.render('entries.ejs');
});

};
