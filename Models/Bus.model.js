const mongoose = require("mongoose");

const busSchema = mongoose.Schema({
    bus_name: {type:String},
    travel_name: {type:String},
    pickup_time: {type:String},
    duration: {type:Number},
    rating: {type:Number},
    pickup_address: {type:String},
    drop_time: {type:String},
    drop_address: {type:String},
    price:{type:Number},
    seat_available: {type:Number},
    booked_seats:[{type:String}]
});

const BusModel = mongoose.model("bus", busSchema);

module.exports = {BusModel};