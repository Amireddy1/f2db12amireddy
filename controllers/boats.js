const boats = require('../models/boats');
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
exports.boats_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Boats.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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
exports.boats_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Boats.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.BoatType) toUpdate.BoatType = req.body.BoatType; 
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