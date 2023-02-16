const Download = async (req, res) => {
  const { fileUid } = req.params;
  return res.download(`uploads/${fileUid}`);
};

module.exports = Download;
