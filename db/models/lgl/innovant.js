const mongoose = require("mongoose");
const Pi = new mongoose.Schema({
  type: {
    type: String,
    default: "PI",
  },
  num_label: {
    type: String,
    required: true,
    uppercase: true,
    trim: true,
  },
  year: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["founder", "coFounder"],
  },
  first_name: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  last_name: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  sex: {
    type: String,
    lowercase: true,
    required: true,
    enum: ["male", "female"],
  },
  coFounders: {
    type: Array,
    default: [],
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  website: {
    type: String,
    default: "",
    lowercase: true,
    trim: true,
  },
  project_name: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  activity: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },

  presentation: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  advancement: {
    type: String,
    required: true,
    trim: true,
  },
  cv: {
    type: String,
    lowercase: true,
    default: "",
    trim: true,
  },
  certificate: {
    type: String,
    lowercase: true,
    default: "",
    trim: true,
  },
  recompense: {
    type: String,
    default: "",
    trim: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  other: {
    type: String,
    lowercase: true,
    default: "",
    trim: true,
  },
  status: {
    type: String,
    default: "",
    trim: true,
    lowercase: true,
  },
});

module.exports = mongoose.model("innovant Project", Pi);
