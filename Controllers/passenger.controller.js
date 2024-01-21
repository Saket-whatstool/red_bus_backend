
const {PassengerModel} = require("../Models/Passenger.model")

const createPassenger = async(req, res) => {
    try {
        const passenger = await PassengerModel.create(req.body)
        console.log(passenger);
        res.status(200).json({message: "Passenger added successfully", data: passenger})
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "Something went wrong when adding passenger"})
    }   
}

const getPassengers = async(req, res) => {
    try {
        const passengers = await PassengerModel.find()
        res.status(200).json(passengers)
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "Something went wrong while getting all passengers"})
    }
}


const deletePassenger = async(req, res) => {
    try {
        await PassengerModel.findByIdAndDelete(req.params.id)
        res.status(200).json({message: "Passenger deleted Successfully"})
    } catch (error) {
        console.log(error);
        res.status(400).json({message:"Cannot delete"})
    }
}

const getPassenger = async(req, res) => {
    try {
        const passenger = await PassengerModel.findById(req.params.id);
        res.status(200).json(passenger)
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "Something went wrong"})
    }
}


module.exports = {
    createPassenger,
    getPassengers,
    getPassenger,
    deletePassenger
}