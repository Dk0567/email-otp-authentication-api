const express = require("express");
const ConnectDB = require("./db/db.js");
const usermodel = require("./model/user.model.js");
const authRouter = require("./routes/auth.routes.js")
const cookieParser = require("cookie-parser");


// this is mongoose network connection DNS 
const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);


const app = express();
app.use(express.json());
ConnectDB();
app.use(cookieParser());
app.use("/api/auth",authRouter)

module.exports = app;