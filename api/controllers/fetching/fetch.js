const innovant = require("../../../db/models/lgl/innovant");
const Startup = require("../../../db/models/lgl/startup");
const Incubator = require("../../../db/models/lgl/incubator");

const getAllDocs = async (req, res) => {
  try {
    if (!req.user.role) return res.send({ message: "Unauthorized" });
    const PI = await innovant.find().sort({ createdAt: "asc" });
    const ST = await Startup.find().sort({ createdAt: "asc" });
    const IN = await Incubator.find().sort({ createdAt: "asc" });
    if (!(PI && ST && IN)) return res.send({ message: "No Docs Found" });
    return res.send({ PI, ST, IN });
  } catch (error) {
    return res.send({ error });
  }
};

const getAllInnovants = async (req, res) => {
  try {
    if (!req.user.role) return res.send({ message: "Unauthorized" });
    const docs = await innovant.find().sort({ createdAt: "asc" });
    if (docs.length == 0) return res.send({ message: "No Docs Found" });
    return res.send({ docs });
  } catch (error) {
    return res.send({ error });
  }
};
const getAllStartups = async (req, res) => {
  try {
    if (!req.user.role) return res.send({ message: "Unauthorized" });
    const docs = await Startup.find().sort({ createdAt: "asc" });
    if (docs.length == 0) return res.send({ message: "No Docs Found" });
    return res.send({ docs });
  } catch (error) {
    return res.send({ error });
  }
};
const getAllIncubators = async (req, res) => {
  try {
    if (!req.user.role) return res.send({ message: "Unauthorized" });
    const docs = await Incubator.find().sort({ createdAt: "asc" });
    if (docs.length == 0) return res.send({ message: "No Docs Found" });
    return res.send({ docs });
  } catch (error) {
    return res.send({ error });
  }
};

module.exports = {
  getAllDocs,
  getAllIncubators,
  getAllInnovants,
  getAllStartups,
};
