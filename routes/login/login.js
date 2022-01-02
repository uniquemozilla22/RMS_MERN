const User = require("../../database/Schema/User/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res, Response) => {
  const { username, password } = req.body;

  const validUser = await findUser(username, password, Response);
  if (validUser.isSuccess) res.status(200).send(validUser);
  else res.status(401).send(validUser);
};

module.exports = login;

// THis function validates the user with the correct password
const findUser = async (username, password, Response) => {
  const user = await User.findOne({ username });
  if (user) {
    const validPassword = await bcrypt.compare(password, user.password);
    return validPassword
      ? createWebToken(user, Response, true, password)
      : new Response(false, "Not Valid Password");
  } else {
    return new Response(false, "Username Not Found");
  }
};

const createWebToken = (user, Response, isSuccess, pass) => {
  const { email, username, address, phone, isAdmin } = user;
  const token = jwt.sign(
    { email, password: pass, username, address, phone, isAdmin },
    process.env.tokenizer,
    {
      expiresIn: "2h",
    }
  );

  return new Response(isSuccess, { token });
};
