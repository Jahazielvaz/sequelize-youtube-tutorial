const express = require('express');
const router = express.Router();

router.post('/', function(req, res){
  console.log('Someone Just Posted!');
  res.render('success.ejs');
  // console.log(req.body.title);
  // console.log(req.body.content);
})

module.exports = router;
