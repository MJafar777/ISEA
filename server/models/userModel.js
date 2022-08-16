const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    minlength: [3, "Siz eng kamida 3 ta symbol ishlata olasiz"],
    maxlength: [30, "Siz eng kopida 12 ta symbol ishlata olasiz"],
  },
});
