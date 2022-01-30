const express = require("express");
const user = require("../controllers/user.controllers");
const router = express.Router();

router.post("/code", user.register);

module.exports = router;
