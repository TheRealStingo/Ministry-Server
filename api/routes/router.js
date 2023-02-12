const router = require("express").Router()
const Auth = require("../middlewares/auth")
const Signup = require("../controllers/user/signup")
const Signin = require("../controllers/user/signin")

router.route("/signup").post(Signup)
router.route("/signin").post(Signin)
module.exports = router