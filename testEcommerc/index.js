const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routes = require("./src/app");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });
app.use(routes)


app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
  });