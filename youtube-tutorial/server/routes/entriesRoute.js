
const express = require('express');
const router = express.Router();
const entriesModel = require('../models/entriesModel.js');

router.get('/', function(req, res){
  console.log('This route working fine');
  res.render('entries.ejs', entriesModel);
});

module.exports = router;
