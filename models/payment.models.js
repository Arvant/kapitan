let mongoose = require("mongoose");

let payment = new mongoose.Schema({
  code: Number,
  plan: Number,
});

module.exports = mongoose.model("Payment", payment);
