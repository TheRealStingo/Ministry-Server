const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
require("dotenv").config();

const connectDB = () =>
  mongoose.connect("mongodb://localhost:27017/admin", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

module.exports = connectDB;
