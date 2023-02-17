require("dotenv").config();
const jwt = require("jsonwebtoken");

const authorization = (req, res, next) => {
  try {

    const token = req.headers.authorization?.split(" ")[1] || null
    if(!token) return res.send({error:"Missing Bearer"})
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    return next();
  } catch (error) {
    return res.send({ error });
  }
};

module.exports = authorization;
