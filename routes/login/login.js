const login = (req, res, Response) => {
  const { username, password } = req.body;

  if (username && password)
    res.status(200).send(new Response(true, { username, password }));
  else
    res
      .status(500)
      .send(
        new Response(
          false,
          "There is a problem with the username and password."
        )
      );
};

module.exports = login;
