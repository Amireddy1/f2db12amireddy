var Boats = require('../models/boats'); 
 

// List of all Boats 
exports.boats_list = async function(req, res) { 
    try{ 
        theboats = await Boats.find(); 
        res.send(theboats); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific Boats. 
exports.boats_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: boats detail: ' + req.params.id); 
}; 
 
// Handle Boats create on POST. 
exports.boats_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: boats create POST'); 
}; 
 
// Handle Boats delete form on DELETE. 
exports.boats_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: boats delete DELETE ' + req.params.id); 
}; 
 
// Handle Boats update form on PUT. 
exports.boats_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: boats update PUT' + req.params.id); 
}; 