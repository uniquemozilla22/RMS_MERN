const login = require("./login/login");
const AddOrder = require("./order/addOrder/AddOrder");
const registerUser = require("./register/register");
const Response = require("./Response.js");
const validateUser = require("./validateUser/validateUser");

const routes = (router) => {
  router.post("/login", (req, res) => login(req, res, Response));
  router.post("/createuser", (req, res) => registerUser(req, res, Response));
  router.post("/validateuser", (req, res) => validateUser(req, res, Response));
  router.post("/add__order", (req, res) => AddOrder(req, res, Response));
  router.get("/", (req, res) => res.send("Server has started"));
};

module.exports = routes;
