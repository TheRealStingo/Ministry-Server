const innovant = require("../../../db/models/lgl/innovant");
const Startup = require("../../../db/models/lgl/startup");
const {
  startupValidation,
  innovantValidation,
} = require("../../utils/validator");

const Create = async (req, res) => {
  let dbPointer, validationPointer;
  if (req.user.role == "visitor") return res.send({ message: "Unauthorized" });
  const { type } = req.body;
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
    const doc = await dbPointer.create(value);
    return res.send({ success: true });
  } catch (error) {
    return res.send({ error });
  }
};

module.exports = Create;
