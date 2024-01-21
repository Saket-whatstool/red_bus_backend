const express = require("express");
const cors = require("cors")
const {connection} = require("./Configs/db");
const { busRouter } = require("./Routes/bus.routes");
const {userRouter} = require("./Routes/user.routes");
const {passengerRouter} = require("./Routes/passenger.routes");
const {authenticate} = require("./middlewares/authenticate.middleware")
require("dotenv").config();



const app = express();


app.use(express.json());
app.use(cors());
app.use((req,res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    res.setHeader('Access-Control-Allow-Header', 'Content-Type, Authorization');
    next();
})

app.use("/api/user", userRouter);
app.use(authenticate)
app.use("/api/bus", busRouter);
app.use("/api/passenger", passengerRouter)













app.listen(process.env.PORT, async() => {
    try {
        await connection;
        console.log("Connected to database");
    } catch (error) {
        console.log(error);
        console.log("Something went Wrong");
    }
    console.log("Connected to sever at port 8000");
})