const mongoose = require("mongoose");
const Pi = new mongoose.Schema({
  type:{
    type:String,
   default:"PI"
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
  role: {
    type: String,
    required: true,
    enum: ["founder", "coFounder"],
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
  coFounders: {
    type: Array,
    default: [],
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
  project_name: {
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

  presentaion: {
    type: String,
    required: true,
    trim: true,
  },
  advancement: {
    type: String,
    required: true,
    trim: true,
  },
  cv: {
    type: String,
    default: "",
    trim: true,
  },
  certificate: {
    type: String,
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

module.exports = mongoose.model("innovant Project", Pi);
