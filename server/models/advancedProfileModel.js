const mongoose = require("mongoose");

const advancedProfileScheme = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "users1",
    },
    type_of_activity: {
      type: String,
      required: true,
      enum: [
        "businessman",
        "farmer",
        "state authorities",
        "student",
        "pensioner",
        "other",
      ],
    },
    academic_degree: {
      type: String,
      required: true,
      enum: ["candidate of science", "doctor of science", "not"],
    },
    degree: {
      type: String,
      required: true,
      enum: ["middle degree", "high degree", "none"],
    },
    work_place: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    stir: {
      type: Number,
      required: true,
      maxlength: [14, "Iltimos 14 talik raqam kiriting"],
    },
    cardNum: {
      type: Number,
      required: true,
      maxlength: [16, "Iltimos 16 talik raqam kiriting"],
    },
  },
  {
    timestamps: true,
  }
);

const AdvancedProfile = mongoose.model(
  "advanced_profiles",
  advancedProfileScheme
);

module.exports = AdvancedProfile;
