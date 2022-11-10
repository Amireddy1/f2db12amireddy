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
exports.boats_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Boats(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    //{"costume_type":"goat", "cost":12, "size":"large"} 
    //{"BoatType":"Sail powered boats", "BoatsCost":5000, "Capacity":"420", "Hull":"V-Shaped Hulls"}
    document.BoatType = req.body.BoatType; 
    document.BoatsCost = req.body.BoatsCost; 
    document.Capacity = req.body.Capacity; 
    document.Hull = req.body.Hull;
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Boats delete form on DELETE. 
exports.boats_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: boats delete DELETE ' + req.params.id); 
}; 
 
// Handle Boats update form on PUT. 
exports.boats_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: boats update PUT' + req.params.id); 
}; 

// VIEWS 
// Handle a show all view 
exports.boats_view_all_Page = async function(req, res) { 
    try{ 
        theboats = await Boats.find(); 
        res.render('boats', { title: 'boats Search Results', results: theboats }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 