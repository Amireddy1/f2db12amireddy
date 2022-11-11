var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var boats_controller = require('../controllers/boats'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Boats.  
router.post('/boats', boats_controller.boats_create_post); 
 
// Handle Boats delete on DELETE. 
router.delete('/boats/:id',boats_controller.boats_delete);
 
// Handle Boats update form on PUT. 
router.put('/boats/:id',boats_controller.boats_update_put);
 
// GET request for one Boats. 
router.get('/boats/:id', boats_controller.boats_detail); 
 
// GET request for list of all Boats items. 
router.get('/boats', boats_controller.boats_list); 
 
module.exports = router; 