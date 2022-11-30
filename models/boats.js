const mongoose = require("mongoose") 
const BoatsSchema = mongoose.Schema({ 
    BoatType: {
        type: String,
        required:true,
        enum:['Sail powered boats','powered boats','Motorboats',],
    },   
    BoatsCost: {
        type: Number,
        required:true,
    },   
    Capacity: {
        type:Number,
        required:true,
    },
    Hull: {
        type:String,
        required:true,
        min:0,
        max:5
    }
}) 
 
module.exports = mongoose.model("Boats", BoatsSchema) 