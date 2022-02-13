const UserSchema = require("../../database/Schema/User/User");
const bcrypt = require("bcrypt");
const { createUser } = require("../Users/User.route");

const registerUser = async (req, res, Response) => {
  const { username, password, name, email, phone, address } = req.body;

  const availabeUser = await validateEmail(email, res, Response);

  if (!availabeUser) {
    const user = await createUser({
      username,
      password,
      name,
      email,
      phone,
      address,
    });

    user
      .save()
      .then(() => {
        res.status(200).send(new Response(true, { name, username, password }));
      })
      .catch((err) =>
        res
          .status(500)
          .send(new Response(false, `Registration not Successfull: ${err}`))
      );
  }
};

const validateEmail = async (email, res, Response) => {
  const availableUser = await UserSchema.findOne({ email });
  if (availableUser) {
    res
      .status(501)
      .send(
        new Response(
          false,
          "Email already contains with the username : " + availableUser.username
        )
      );
    return availableUser;
  } else return false;
};

module.exports = registerUser;
