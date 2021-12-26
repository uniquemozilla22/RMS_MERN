const routes = (router) => {
  router.get("/", (req, res) => {
    res.send("<h1>Server is running<");
  });
};

module.exports = routes;
