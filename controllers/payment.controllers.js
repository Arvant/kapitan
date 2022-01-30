let PaymentModel = require("../models/payment.models");
function genRandomCode() {
  const min = 1000;
  const max = 9999;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function create(req, res) {
  console.log(req.body);
  const { plan } = req.body.data;
  const code = genRandomCode();
  const link = `https://bank/payment/${code}`;
  const state = "sent";
  let newPayment = new PaymentModel({
    plan,
    code,
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

module.exports = {
  create,
};
