const User = require("../../../db/models//users/user");
const bcrypt = require("bcrypt");
const { signInUpValidation } = require("../../utils/validator");
const Signup = async (req, res) => {
  const { error, value } = signInUpValidation(req.body);
  if (error) return res.send({ error: error.details[0].message });
  const { email, password } = value;
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
