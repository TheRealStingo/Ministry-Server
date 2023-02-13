const mongoose = require("mongoose");
const St = new mongoose.Schema({
    type:{
        type:String,
       default:"ST"
    },
  num_label: {
    type: String,
    required: true,
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
    trim: true,
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
  },
  sex: {
    type: String,
    required: true,
    enum: ["man", "woman"],
  },
  qualifications: {
    type: String,
    default: "",
    trim: true,
  },

  email: {
    type: String,
    required: true,
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
    trim: true,
  },
  startup_name: {
    type: String,
    required: true,
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
    trim: true,
  },
  juridic_status: {
    type: String,
    default: "",
    trim: true,
  },
  nif: {
    type: String,
    required: true,
    trim: true,
  },

  presentaion: {
    type: String,
    required: true,
    trim: true,
  },
  register: {
    type: String,
    required: true,
    trim: true,
  },
  certificate: {
    type: String,
    default: "",
    trim: true,
  },

  advancement: {
    type: String,
    required: true,
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
  adress: {
    type: String,
    required: true,
    trim: true,
  },
  other: {
    type: String,
    default: "",
    trim: true,
  },
});

module.exports = mongoose.model("Startup", St);
