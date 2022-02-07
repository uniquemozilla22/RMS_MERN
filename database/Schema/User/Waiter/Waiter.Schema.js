const { Mongoose } = require("mongoose");
const User = require("../User");

const WaiterSchema = new User({
  isWaiter: { type: Boolean, required: true },
});

module.exports = Mongoose.model("waiter", WaiterSchema);
