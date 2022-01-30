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
function login(req, res) {
  res.json({ success: true });
}
module.exports = {
  register,
  login,
};
