const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  section: [
    {
      descrpition: {
        type: String,
        required: true,
      },
      image: { type: String },
    },
  ],
  category: {
    type: String,
    required: true,
    enum: ["articles", "presses", "experts"],
  },
  publisher: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("news", schema);
