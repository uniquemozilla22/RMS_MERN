const { Mongoose } = require("mongoose");
const User = require("../User.js");

const ChefSchema = new User({
  isChef: { type: Boolean, required: true },
});

module.exports = Mongoose.model("chef", ChefSchema);
