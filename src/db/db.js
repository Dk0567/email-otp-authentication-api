const mongoose = require("mongoose");

async function ConnectDB() {
  mongoose.connect(process.env.MONGO_URI);
}
console.log("DB is connected");

module.exports = ConnectDB;