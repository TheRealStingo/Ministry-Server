const innovant = require("../../../db/models/lgl/innovant");
const Startup = require("../../../db/models/lgl/startup");
const User = require("../../../db/models/users/user");

const Create = (req, res) => {
    let dbPointer;
  if (req.user.role == "visitor") return res.send({ message: "Unauthorized" });
  const { type } = req.body;
  switch (type) {
    case "PI": dbPointer= innovant
      break;
    case "ST":
        dbPointer= Startup
      break;

    default: return res.send({error:"Invalid Type"})
      
  }

  return res.send({dbPointer})
};

module.exports = Create;
