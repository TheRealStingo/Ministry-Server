const innovant = require("../../../db/models/lgl/innovant");
const Startup = require("../../../db/models/lgl/startup");
const Incubator = require("../../../db/models/lgl/incubator");
const deleteDoc = async (req, res) => {
  let dbPointer;
  if (req.user.role != "admin") return res.send({ message: "Unauthorized" });
  const { type, _id } = req.body;
  if (!_id)
    return res.send({ message: "The _id is required for this operation" });
  switch (type) {
    case "PI":
      dbPointer = innovant;
      break;
    case "ST":
      dbPointer = Startup;
      break;
    case "IN":
      dbPointer = Incubator;
      break;

    default:
      return res.send({ error: "Invalid Type" });
  }
  try {
    const doc = await dbPointer.findByIdAndDelete(_id);
    if (!doc) return res.send({ message: "Document doesnt exist" });
    return res.send({ success: true });
  } catch (error) {
    res.send({ error });
  }
};

module.exports = deleteDoc;
