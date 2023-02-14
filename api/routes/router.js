const router = require("express").Router();
const Auth = require("../middlewares/auth");
const Signup = require("../controllers/user/signup");
const Signin = require("../controllers/user/signin");
const Create = require("../controllers/crud/create")
const Update = require("../controllers/crud/update")
const Delete = require("../controllers/crud/delete")

router.route("/signup").post(Signup);
router.route("/signin").post(Signin);
router.route("/create").post(Auth,Create)
router.route("/update").post(Auth,Update)
router.route("/delete").post(Auth,Delete)

module.exports = router;
