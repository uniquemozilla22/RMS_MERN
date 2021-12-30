const UserSchema = require("../../database/Schema/User/User");
const bcrypt = require("bcrypt");

const register = async (req, res, Response) => {
  const { username, password, name, email, phone, address } = req.body;

  const containsEmail = validateEmail(email,res,Response);

  console.log(containsEmail)

  if(!containsEmail)
  {const user = new UserSchema({
    username,
    password,
    name,
    email,
    phone,
    address,
    isAdmin: false,
  });

  const salt = await bcrypt.genSalt(+process.env.SALT);

  user.password = await bcrypt.hash(user.password, salt);

  user
    .save()
    .then(() => {
      res.status(200).send(new Response(true, { name, username, password }));
    })
    .catch((err) =>
      res
        .status(500)
        .send(new Response(false, "Registration not Successfull:", err))
    );}
};

module.exports = register;

const validateEmail = (email,res,Response) => {
  UserSchema.findOne({ email }).then((availableUser) => {
    if (availableUser){
      res
        .status(501)
        .send(
          new Response(
            false,
            "Email already contains with the username : " +
              availableUser.username
          )
        );
      return true;
      }
      return false
  });
};
