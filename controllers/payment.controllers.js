let PaymentModel = require("../models/payment.models");
const jwt = require("jsonwebtoken");
const config = require("../config/consts.config");
function genRandomCode() {
  const min = 1000;
  const max = 9999;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function create(req, res) {
  console.log(req.body);
  const { plan } = req.body.data;
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  const decoded = jwt.verify(token, config.jwtSecret);
  const user = decoded.user;
  const code = genRandomCode();
  const link = `https://bank.com/payment/${code}`;
  const state = "sent";
  let newPayment = new PaymentModel({
    plan,
    code,
    user,
  });

  let payment = await newPayment.save();

  res.json({
    success: true,
    data: {
      plan,
      code,
      link,
      state,
    },
  });
}
async function list(req, res) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  const decoded = jwt.verify(token, config.jwtSecret);
  const user = decoded.user;
  const payments = await PaymentModel.find({ user });
  res.json({
    success: true,
    data: {
      payments,
    },
  });
}
module.exports = {
  create,
  list,
};
