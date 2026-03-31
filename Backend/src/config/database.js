const mongoose = require("mongoose");

function connectToDb() {
  if (!process.env.MONGO_URI) {
    console.error("ERROR: MONGO_URI environment variable is not set");
    return;
  }
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connect To DB");
    })
    .catch((error) => {
      console.error("Database connection error:", error.message);
    });
}

module.exports = connectToDb;
