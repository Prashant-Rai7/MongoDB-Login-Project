const mongoose = require("mongoose");

const loginform_data = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirm_password: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  profile: {
    type: String,
    required: true,
  },
});

const signup_data = mongoose.model("signup_data", loginform_data);

module.exports = signup_data;
