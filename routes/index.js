const login = require("./login/login");
const register = require("./register/register");
const Response = require("./Response.js");
const validateUser = require("./validateUser/validateUser");

const routes = (router) => {
  router.post("/login", (req, res) => login(req, res, Response));
  router.post("/register", (req, res) => register(req, res, Response));
  router.post("/validateUser", (req, res) => validateUser(req, res, Response));

  router.get("/", (req, res) => {
    res.send("Server has started");
  });
};

module.exports = routes;
