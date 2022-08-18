const mongoose = require("mongoose");
const validator = require("validator");

const codeSchema = new mongoose.Schema(
  {
    email_or_phone: {
      type: String,
      required: true,
      validate: {
        validator: function (val) {
          return validator.isEmail(val);
        },
        message: "Iltimos togri email kiriting",
      },
    },
    code: {
      type: Number,
      required: true,
      unique: true,
    },

    expired_date: {
      type: Number,
      default: Number(Date.now()) + Number(process.env.EXPIRED_TIME_CODE),
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
const Code = mongoose.model("codes", codeSchema);

module.exports = Code;
