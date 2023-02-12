const router = require("express").Router()
const Signup = require("../controllers/signup")

router.route("/signup").post(Signup)
module.exports = router