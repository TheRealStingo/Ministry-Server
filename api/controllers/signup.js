const User = require("../../db/models/user");
const jwt = require("jsonwebtoken");
const Signup =async (req, res) => {
  let { email, password } = req.body;
  try {
    const user =await User.create({
      email,
      password,
    });

    return res.send({ status: "success" });
  } catch (error) {
    res.send(!error.keyValue?.email ? { error } : { error: "Email used" });
  }
};

module.exports = Signup;
