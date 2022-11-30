var express = require('express');
const boats_controlers= require('../controllers/boats'); 
var router = express.Router();
// A little function to check if we have an authorized user and continue on 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET home page. */
router.get('/', boats_controlers.boats_view_all_Page ); 

/* GET detail Boats page */ 
router.get('/detail', secured,boats_controlers.boats_view_one_Page); 

router.get('/boats/:id', secured,boats_controlers.boats_detail);

/* GET create Boats page */ 
router.get('/create', secured,boats_controlers.boats_create_Page);  

/* GET delete Boats page */ 
router.get('/delete', secured,boats_controlers.boats_delete_Page);

/* GET update Boats page */ 
router.get('/update',secured,boats_controlers.boats_update_Page); 

module.exports = router;
