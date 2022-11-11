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
exports.boats_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Boats.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// Handle Boats update form on PUT. 
exports.boats_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Boats.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.BoatType)  
               toUpdate.BoatType = req.body.BoatType; 
        if(req.body.BoatsCost) toUpdate.BoatsCost = req.body.BoatsCost; 
        if(req.body.Capacity) toUpdate.Capacity = req.body.Capacity; 
        if(req.body.Hull) toUpdate.Hull = req.body.Hull;
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
    } 
}; 
 
// GET request for one Boats. 
router.get('/boats/:id', boats_controller.boats_detail); 
 
// GET request for list of all Boats items. 
router.get('/boats', boats_controller.boats_list); 
 
module.exports = router; 