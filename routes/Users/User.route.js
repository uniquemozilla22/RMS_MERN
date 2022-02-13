const bcrypt = require("bcrypt");
const UserSchema = require("../../database/Schema/User/User");

const createUser = async (data) => {
  const user = new UserSchema({ ...data });

  const salt = await bcrypt.genSalt(+process.env.SALT);

  user.password = await bcrypt.hash(user.password, salt);

  return user;
};

const removeUser = ({ id }) => {
  UserSchema.deleteOne({ _id: id });
};

module.exports = {
  createUser,
  removeUser,
};
