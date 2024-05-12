require("dotenv").config();
const mongoose = require("mongoose");
const dbURL = process.env.DBURL;

console.log(process.env.DBURL);

async function connectDB() {
  try {
    await mongoose
      .connect(dbURL, {
        useNewUrlParser: "true",
      })
      .then(() => console.log("Database connect successfully."));
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDB;
