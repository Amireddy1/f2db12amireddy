var express = require('express');
const boats_controlers= require('../controllers/boats'); 
var router = express.Router();

/* GET home page. */
router.get('/', boats_controlers.boats_view_all_Page ); 

module.exports = router;
