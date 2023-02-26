const fs = require("fs");
const Delete = (req, res) => {
  try {
  } catch (error) {}
  fs.stat("upload/my.csv", function (err, stats) {
    console.log(stats);

    if (err) {
      return console.error(err);
    }

    fs.unlink("./server/upload/my.csv", function (err) {
      if (err) return console.log(err);
      console.log("file deleted successfully");
    });
  });
};
