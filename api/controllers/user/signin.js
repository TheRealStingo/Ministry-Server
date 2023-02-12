require("dotenv").config();
const User = require("../../../db/models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.send({ message: "Signup Please" });
    const matchedPassword = await bcrypt.compareSync(password, user.password);
    if (matchedPassword) {
      const token = jwt.sign(
        { uid: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );
      return res.send({ sucess: true, token });
    }
    return res.send({ sucess: false });
  } catch (error) {
    res.send({ error });
  }
};

module.exports = Signin;
