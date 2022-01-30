let mongoose = require("mongoose");

let user = new mongoose.Schema({
  email: String,
  password: String,
  code: Number,
});

module.exports = mongoose.model("User", user);
