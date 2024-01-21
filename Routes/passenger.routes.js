const express = require("express");
const {createPassenger, getPassenger, getPassengers, deletePassenger} = require("../Controllers/passenger.controller")

const passengerRouter = express.Router();


passengerRouter.post("/", createPassenger);
passengerRouter.get("/", getPassengers);
passengerRouter.get("/:id", getPassenger);
passengerRouter.delete("/:id", deletePassenger);


module.exports ={passengerRouter}