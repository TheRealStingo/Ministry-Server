const mongoose = require("mongoose");
const In = new mongoose.Schema({
  type: {
    type: String,
    default: "IN",
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
  incubator_name: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  services: {
    type: Array,
    required: true,
    trim: true,
  },
  plan: {
    type: String,
    required: true,
    trim: true,
  },
  presentation: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  incubed_st: {
    type: Array,
    default: [],
  },
  cv: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  num_employees: {
    type: Number,
    required: true,
    trim: true,
  },
  juridic_status: {
    type: String,
    default: "",
    lowercase: true,
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
  coFounders: {
    type: Array,
    default: [],
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
  creation_date: {
    type: String,
    required: true,
    trim: true,
  },
  nif: {
    type: String,
    uppercase: true,
    required: true,
    trim: true,
  },

  register: {
    type: String,
    required: true,
    trim: true,
  },

  social_status: {
    type: String,
    required: true,
    trim: true,
  },
  agreement: {
    type: String,
    required: true,
    trim: true,
  },

  other: {
    type: String,
    default: "",
    trim: true,
    lowercase: true,
  },
  status: {
    type: String,
    default: "",
    trim: true,
    lowercase: true,
  },
});

module.exports = mongoose.model("Incubator", In);
