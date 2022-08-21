const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: { type: String, required: true },
  bookImage: {
    type: String,
    required: true,
  },
  language: { type: String, required: true },
  category: {
    type: String,
    required: true,
  },
  book: {
    type: String,
    required: true,
  },
  sub_description: { type: String },
  description: { type: String, required: true },
  publisher: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("books", schema);
