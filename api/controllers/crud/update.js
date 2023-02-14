const innovant = require("../../../db/models/lgl/innovant");
const Startup = require("../../../db/models/lgl/startup");
const {
  startupValidation,
  innovantValidation,
} = require("../../utils/validator");

const updateDoc = async (req, res) => {
  let dbPointer, validationPointer;
  if (req.user.role == "visitor") return res.send({ message: "Unauthorized" });
  const { type, _id } = req.body;
  if (!_id)
    return res.send({ message: "The _id is required for this operation" });
  switch (type) {
    case "PI":
      dbPointer = innovant;
      validationPointer = innovantValidation;
      break;
    case "ST":
      dbPointer = Startup;
      validationPointer = startupValidation;
      break;

    default:
      return res.send({ error: "Invalid Type" });
  }
  try {
    const { error, value } = validationPointer(req.body);
    if (error) return res.send({ error: error.details[0].message });
    const doc = await dbPointer.findByIdAndUpdate(_id, value, {
      runValidators: true,
      new: true,
    });
    return res.send({ doc });
  } catch (error) {
    res.send({ error });
  }
};

module.exports = updateDoc;
