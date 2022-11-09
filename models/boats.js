const mongoose = require("mongoose") 
const BoatsSchema = mongoose.Schema({ 
 BoatType: String, 
 BoatsCost: Number, 
 Capacity: Number,
 Hull: String
}) 
 
module.exports = mongoose.model("Boats", BoatsSchema) 