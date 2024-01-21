const express = require("express");
const { createBus, getBuses, getBus, updateBus, deleteBus } = require("../Controllers/bus.controller");

const busRouter = express.Router();


busRouter.post("/", createBus);
busRouter.get("/", getBuses)
busRouter.get("/:id", getBus)
busRouter.patch("/:id", updateBus)
busRouter.delete("/:id", deleteBus)




module.exports = {busRouter}