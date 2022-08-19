const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "users1",
    },
    bookId: {
      type: mongoose.Schema.ObjectId,
      ref: "books",
    },
    projectId: {
      type: mongoose.Schema.ObjectId,
      ref: "projects",
    },
    reviewBook: {
      type: String,
    },
    reviewProject: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Reviews = mongoose.model("reviews", schema);

module.exports = Reviews;
