const mongoose = require("mongoose") 
const BoatsSchema = mongoose.Schema
const passportLocalMongoose = require("passport-local-mongoose");

const accountSchema = new Schema({ 
    username: String, 
    password: String 
}); 

accountSchema.plugin(passportLocalMongoose);

// We export the Schema to avoid attaching the model to the 
// default mongoose connection. 
module.exports = mongoose.model("Boats", BoatsSchema) 