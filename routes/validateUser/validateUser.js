const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../database/Schema/User/User");

const validateUser = (req, res, Response) => {
  const { token } = req.body;

  jwt.verify(token, process.env.tokenizer, async (err, user) => {
    if (err) return res.status(403).end(new Response(false, "Invalid Token"));

    const { email, password, username, address, phone, isAdmin } = user;
    const userDB = await User.findOne({
      email,
      username,
      address,
      phone,
      isAdmin,
    });
    if (userDB) {
      const validpass = await validatePassword(password, userDB.password);

      validpass
        ? res.status(200).send(new Response(true, { isValidToken: validpass }))
        : res.status(401).send(new Response(true, { isValidToken: validpass }));
    } else {
      res.status(401).send(new Response(true, "No User found "));
    }
  });
};

const validatePassword = async (password1, password2) => {
  const isValid = await bcrypt.compare(password1, password2);
  return isValid;
};
module.exports = validateUser;
