const userModels = require("../models/user.models");
let UserModel = require("../models/user.models");
function genRandomCode() {
  const min = 1000;
  const max = 9999;
  return Math.floor(Math.random() * (max - min + 1) + min);
}
async function register(req, res) {
  const { email, password } = req.body.data;
  const code = genRandomCode();
  const newUser = new UserModel({
    email: email,
    password: password,
    code,
  });

  let user = await newUser.save();

  res.json({
    success: true,
    data: {
      email,
      code,
    },
  });
}
async function login(req, res) {
  const { email, password, code } = req.body.data;
  const user = await userModels.findOne({ email, password, code });
  if (user) {
    res.json({
      success: true,
      token: "test",
    });
  } else {
    res.status(404).json({
      success: false,
    });
  }
}
module.exports = {
  register,
  login,
};
