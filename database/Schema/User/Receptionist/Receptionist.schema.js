const { Mongoose } = require("mongoose");
const User = require("../User");

const ReceptionistSchema = new User({
  isReceptionist: { type: Boolean, required: true },
});

module.exports = Mongoose.model("receptionists", ReceptionistSchema);
