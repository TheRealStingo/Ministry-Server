const Download = async (req, res) => {
  const { fileUid } = req.params;
  return res.download(`uploads/${fileUid}`, (err) => {
    res.send({ message: "File Not found" });
  });
};

module.exports = Download;
