const router = require("express").Router();
const Auth = require("../middlewares/auth");
const Signup = require("../controllers/user/signup");
const Signin = require("../controllers/user/signin");
const Create = require("../controllers/crud/create")

router.route("/signup").post(Signup);
router.route("/signin").post(Signin);
router.route("/create").post(Auth,Create)

module.exports = router;
