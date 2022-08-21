const mongoose = require("mongoose");

const projectScheme = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "users1",
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: [50, "Siz 50 ta symboldan kop soz kirita olmaysiz"],
    },
    presentation: {
      type: String,
      required: true,
    },
    state: {
      type: "Number",
      enum: [1, 2, -1],
      default: 1,
    },
    category: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("projects", projectScheme);

module.exports = Project;
