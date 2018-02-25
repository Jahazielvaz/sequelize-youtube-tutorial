

module.exports = function(app){
router.get('/', function(req, res){
  console.log('This route working fine');
  res.render('entries.ejs');
});

};
