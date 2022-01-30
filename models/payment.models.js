const mongoose = require("mongoose");
const userModel = require("./user.models");
let payment = new mongoose.Schema({
  code: Number,
  plan: Number,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  state: {
    type: String,
    enum: ["send", "paid"],
    default: "send",
  },
});

module.exports = mongoose.model("Payment", payment);
