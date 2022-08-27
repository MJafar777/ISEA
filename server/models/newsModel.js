const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  photo: { type: String },
  category: {
    type: String,
    required: true,
    enum: ["Articles", "Presses", "Experts"],
  },
  publisher: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("news", schema);
