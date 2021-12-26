const login = (req, res) => {
  const { username, password } = req.body;

  

  if (username && password)
    res.status(200).send({ success: true, data: { username, password } });
  else
    res.status(500).send({
      success: false,
      data: { message: "username or password Invalid" },
    });
};

module.exports = login;
