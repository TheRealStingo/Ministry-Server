const mongoose = require("mongoose");
const St = new mongoose.Schema({
  type: {
    type: String,
    default: "ST",
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
  creation_date: {
    type: String,
    required: true,
    trim: true,
  },
  num_employees: {
    type: Number,
    required: true,
    trim: true,
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
    required: true,
    enum: ["male", "female"],
    lowercase: true,
  },
  qualifications: {
    type: String,
    default: "",
    lowercase: true,
    trim: true,
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
  startup_name: {
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
  juridic_status: {
    type: String,
    default: "",
    lowercase: true,
    trim: true,
  },
  nif: {
    type: String,
    uppercase: true,
    required: true,
    trim: true,
  },

  presentation: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  register: {
    type: String,
    required: true,
    trim: true,
  },
  advancement: {
    type: String,
    required: true,
    trim: true,
  },
  certificate: {
    type: String,
    default: "",
    lowercase: true,
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
    trim: true,
    lowercase: true,
  },
  result:{
    type: String,
    trim: true,
    lowercase: true,
  },
  other: {
    type: String,
    default: "",
    trim: true,
    lowercase: true,
  },
});

module.exports = mongoose.model("Startup", St);
