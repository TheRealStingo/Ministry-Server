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

const getDocumentById = async (req, res) => {
  const { type, _id } = req.params;
  let dbPointer;
  switch (type) {
    case "pi":
      dbPointer = innovant;
      break;
    case "st":
      dbPointer = Startup;
      break;
    case "in":
      dbPointer = Incubator;
      break;
    default:
      return res.send({ error: "Invalid Type" });
  }
  try {
    const doc = await dbPointer.findById(_id);
    if (!doc) return res.send({ message: "Document Not found" });
    return res.send({ doc });
  } catch (error) {
    return res.send({ error });
  }
};

const getDocumentsByQuery = async (req, res) => {
  const { type } = req.query;
  let dbPointer;
  switch (type) {
    case "pi":
      dbPointer = innovant;
      break;
    case "st":
      dbPointer = Startup;
      break;
    case "in":
      dbPointer = Incubator;
      break;
    default:
      return res.send({ error: "Invalid Type" });
  }
  Object.filter = (obj, predicate) =>
    Object.keys(obj)
      .filter((key) => predicate(obj[key]))
      .reduce((res, key) => ((res[key] = obj[key]), res), {});
  let filters = Object.filter(req.query, (query) => query);
  delete filters.type;
  try {
    if (Object.keys(filters).length === 0)
      return res.send({ message: "Please Add Queries" });
    const docs = await Incubator.find(filters).sort({ createdAt: "asc" });
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
  getDocumentById,
  getDocumentsByQuery,
};
