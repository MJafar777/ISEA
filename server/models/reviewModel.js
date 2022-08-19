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
      required: [true, "Siz reviewBookni kiritishingiz kerak"],
    },
    reviewProject: {
      type: String,
      required: [true, "Siz reviewProjectni kiritishingiz kerak"],
    },
  },
  {
    timestamps: true,
  }
);

const Reviews = mongoose.model("reviews", schema);

module.exports = Reviews;
