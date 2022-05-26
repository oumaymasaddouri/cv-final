const express = require("express");
const { AddUser, getOneUser, deleteuser, updateuser, login } = require("../controlls/usercontrolls");
const {isAuth}=require ("../middleware/auth")
const userroutes = express.Router()

userroutes.post("/adduser", AddUser)
userroutes.post("/login", login)
userroutes.get("/:id", getOneUser)
userroutes.delete("/deleteuser/:id", isAuth , deleteuser)

userroutes.put("/edit/:id",isAuth, updateuser)
module.exports = userroutes 
