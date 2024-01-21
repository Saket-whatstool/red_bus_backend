const { BusModel } = require("../Models/Bus.model")


//Adding bus to the database
const createBus = async(req, res) => {
    try {
        const bus = await BusModel.create(req.body);
        res.status(200).json(bus)
    } catch (error) {
        res.status(400).json({message: "Bad Request"})
        console.log("Something went wrong");
    }
}


//Getting all buses from database
const getBuses = async(req, res) => {
    try {
        const buses = await BusModel.find(req.query)
        res.status(200).json(buses)
    } catch (error) {
        console.log(error);
        res.status(400).json({message:"Something went Wrong"})
    }
}


//Getting bus by its Id
const getBus = async(req, res) => {
    try {
        const bus = await BusModel.findById(req.params.id);
        res.status(200).json(bus)
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "Something went wrong"})
    }
}


//Updating Bus details in database
const updateBus = async(req, res) => {

    const payload = req.body;
    const id = req.params.id

    try {
        const bus = await BusModel.findByIdAndUpdate(id, payload)
        res.status(200).json({message: "Bus details has been Updated"})
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "Cannot update"})
    }
}

//Delete a bus by its id
const deleteBus = async(req, res) => {
    try {
        await BusModel.findByIdAndDelete(req.params.id)
        res.status(200).json({message: "Bus deleted Successfully"})
    } catch (error) {
        console.log(error);
        res.status(400).json({message:"Cannot delete"})
    }
}





module.exports = {createBus, getBuses, getBus, updateBus, deleteBus};