require("dotenv").config();
const User = require("../../../db/models/users/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { signInUpValidation } = require("../../utils/validator");

const Signin = async (req, res) => {
  const { error, value } = signInUpValidation(req.body);
  if (error) return res.send({ error: error.details[0].message });
  const { email, password } = value;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.send({ error: "Signup Please" });
    const matchedPassword = await bcrypt.compare(password, user.password);
    if (matchedPassword) {
      const token = jwt.sign(
        { uid: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );
      return res.send({ sucess: true, token, email: user.email });
    }
    return res.send({ sucess: false });
  } catch (error) {
    res.send({ error });
  }
};

module.exports = Signin;
