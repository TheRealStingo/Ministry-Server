require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);


const connectDB = () =>
  mongoose.connect(process.env.MONGO_URIV2, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

module.exports = connectDB;
