const multer = require("multer");

const Upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = [...Array(32)]
        .map(() => Math.floor(Math.random() * 16).toString(16))
        .join("");
      const EXT = "." + file.originalname.split(".")[1];
      req.fileUid = uniqueSuffix + EXT;
      cb(null, uniqueSuffix + EXT);
    },
  }),
}).single("upload-pdf");

const HandleUpload = (req, res) => res.send({ fileUid: req.fileUid });

module.exports = { Upload, HandleUpload };
