const express = require("express");
const user = require("../controllers/user.controllers");
const router = express.Router();

router.post("/code", user.register);
router.post("/login", user.login);

module.exports = router;
