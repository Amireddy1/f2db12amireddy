var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Boats', { title: 'Search Result Boats' });
});

module.exports = router;
