const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userScheme = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Siz ismingizni kiritishingiz shart"],
    minlength: [3, "Siz eng kamida 3 ta symbol ishlata olasiz"],
    maxlength: [30, "Siz eng kopida 12 ta symbol ishlata olasiz"],
  },
  surname: {
    type: String,
    trim: true,
    required: [true, "Siz familiyangizni kiritishingiz shart"],
    minlength: [3, "Siz eng kamida 3 ta symbol ishlata olasiz"],
    maxlength: [30, "Siz eng kopida 12 ta symbol ishlata olasiz"],
  },
  name_of_father: {
    type: String,
    trim: true,
    required: [true, "Siz otangizni ismini kiritishingiz shart"],
    minlength: [3, "Siz eng kamida 3 ta symbol ishlata olasiz"],
    maxlength: [30, "Siz eng kopida 12 ta symbol ishlata olasiz"],
  },
  date_of_birth: {
    type: Date,
    required: [true, "Siz tugilgan kuningizni kiritishingiz kerak"],
  },
  gender: {
    type: String,
    required: [true, "Siz millatni kiritishingiz kerak"],
  },
  photo: {
    type: String,
    default: "default.jpeg",
  },
  password: {
    type: String,
    required: [true, "Siz passwordni kiritishingiz shart"],
    minlength: [8, "Eng kamida 8 ta symbol ishlata olasiz"],
    maxlengt: [16, "Eng kopida 16 ta symbol ishlata olasiz"],
    validate: {
      validator: function (val) {
        return validator.isStrongPassword(val);
      },
      message: "Iltimos togri password kiriting!",
    },
    select: false, //responsega kemaydi lekin databasega yozadi password hich qachon kelishi keremas umuman
  },
  passwordConfirm: {
    type: String,
    required: true,
    validate: {
      validator: function (val) {
        return val == this.password;
      },
      message: "Iltimos siz bir xil password kiriting",
    },
  },
});
