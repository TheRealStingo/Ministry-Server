const router = require("express").Router();
const Auth = require("../middlewares/auth");
const Signup = require("../controllers/user/signup");
const Signin = require("../controllers/user/signin");
const Create = require("../controllers/crud/create");
const Update = require("../controllers/crud/update");
const Delete = require("../controllers/crud/delete");
const { Upload, HandleUpload } = require("../controllers/upload/upload");
const Download = require("../controllers/upload/download");
const {
  getAllDocs,
  getAllIncubators,
  getAllInnovants,
  getAllStartups,
  getDocumentById
} = require("../controllers/fetching/fetch");

router.route("/signup").post(Signup);
router.route("/signin").post(Signin);
router.route("/create").post(Auth, Create);
router.route("/update").post(Auth, Update);
router.route("/delete").post(Auth, Delete);
router.route("/upload-file").post(Upload, HandleUpload);
router.route("/download-file/:fileUid").get(Download);
router.route("/list/pi").get(Auth, getAllInnovants);
router.route("/list/st").get(Auth, getAllStartups);
router.route("/list/in").get(Auth, getAllIncubators);
router.route("/list").get(Auth, getAllDocs);
router.route("/document/:type/:_id").get(Auth,getDocumentById)
// router
//   .route("/dl/:id")
//   .get((req, res) =>
//     res.download("uploads/fb5c16eda175238f7b51394332445b94-IMG_2064.jpg")
//   );

module.exports = router;
