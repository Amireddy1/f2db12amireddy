var express = require('express');
const boats_controlers= require('../controllers/boats'); 
var router = express.Router();

/* GET home page. */
router.get('/', boats_controlers.boats_view_all_Page ); 

/* GET detail Boats page */ 
router.get('/detail', boats_controlers.boats_view_one_Page); 

/* GET create Boats page */ 
router.get('/create', boats_controlers.boats_create_Page); 

module.exports = router;
