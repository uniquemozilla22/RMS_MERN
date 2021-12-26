const login = require("./login/login");

const routes = (router) => {
  router.post("/login", login);

  router.get("/", (req, res) => {
    res.send("Server has started");
  });
};

module.exports = routes;
