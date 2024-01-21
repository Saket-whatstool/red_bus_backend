const mongoose = require("mongoose");

const passengerSchema = mongoose.Schema({
    name:{type:String, required:true},
    age:{type:Number, required:true},
    phoneNo:{type:String, required:true},
    gender:{type:String, required:true},
    seats:[{type:String}]
})


const PassengerModel = mongoose.model("passenger", passengerSchema);





module.exports = {PassengerModel}