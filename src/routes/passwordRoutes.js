const express = require("express");
const router = express.Router();
const { forgotPassword } = require("../controllers/passwordController.js");

router.post("/forgot-password", forgotPassword);

module.exports = router;