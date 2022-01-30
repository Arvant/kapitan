const express = require("express");
const payment = require("../controllers/payment.controllers");
const router = express.Router();
router.post("/", payment.create);
router.get("/",payment.list);

module.exports = router;
