let PaymentModel = require("../models/payment.models");
function genRandomCode() {
  const min = 1000;
  const max = 9999;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function create(req, res) {
  console.log(req.body);
  const { plan } = req.body.data;
  const code = genRandomCode();
  const link = `https://bank/payment/${code}`;
  const state = "sent";
  let payment = new PaymentModel({
    plan,
    code,
  });

  payment
    .save()
    .then((doc) => {
      console.log(doc);
    })
    .catch((err) => {
      console.error(err);
    });

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
