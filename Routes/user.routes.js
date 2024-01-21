const express = require("express")
const {registerUser, loginUser, deleteUser, getUsers} = require("../Controllers/user.controller")

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/", getUsers);
userRouter.delete("/:id", deleteUser);


module.exports = {userRouter};