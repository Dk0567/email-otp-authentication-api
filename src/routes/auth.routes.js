const express = require("express");
const authRouter = express.Router();
const authcontrollers = require("../controllers/auth.controller.js");
const register = require("../controllers/auth.controller");

/* /api/auth/ */

authRouter.post("/register", authcontrollers.register);

authRouter.post("/login", authcontrollers.login);

authRouter.get("/getme", authcontrollers.getme);

authRouter.get("/refreshtoken", authcontrollers.refreshtoken);

authRouter.get("/logout",authcontrollers.logout);

authRouter.get("/logout-All", authcontrollers.logoutAll);

authRouter.get("/verify-email", authcontrollers.verifyEmail);

module.exports = authRouter;