const mongoose = require("mongoose");
const User = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "visitor",
      enum: ["admin", "visitor"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", User);
