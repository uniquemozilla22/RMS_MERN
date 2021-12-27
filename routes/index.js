const login = require("./login/login");
const Response = require("./Response.js");

const routes = (router) => {
  router.post("/login", (req, res) => login(req, res, Response));

  router.get("/", (req, res) => {
    res.send("Server has started");
  });
};

module.exports = routes;
