const login = require("./login/login");
const express = require("express");
const AddOrder = require("./order/addOrder/AddOrder");
const registerUser = require("./register/register.route.js");
const Response = require("./Response.js");
const UserRouter = express.Router();
const validateUser = require("./validateUser/validateUser");

UserRouter.post("/login", (req, res) => login(req, res, Response));
UserRouter.post("/createuser", (req, res) => registerUser(req, res, Response));
UserRouter.post("/validateuser", (req, res) =>
  validateUser(req, res, Response)
);
UserRouter.post("/add__order", (req, res) => AddOrder(req, res, Response));
UserRouter.get("/", (req, res) => res.send("Server has started"));

module.exports = UserRouter;
