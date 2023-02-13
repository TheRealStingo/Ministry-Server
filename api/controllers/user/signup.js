const User = require("../../../db/models//users/user");
const bcrypt = require("bcrypt");
const Signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      password: hashedPassword,
    });

    return res.send({ status: "success" });
  } catch (error) {
    res.send(!error.keyValue?.email ? { error } : { error: "Email used" });
  }
};

module.exports = Signup;
