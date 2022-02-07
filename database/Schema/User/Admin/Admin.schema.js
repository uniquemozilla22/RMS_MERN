const { Mongoose } = require("mongoose");
const User = require("../User");

const AdminSchema = new User({
  isAdmin: { type: Boolean, required: true },
});

module.exports = Mongoose.model("admin", Admin);
