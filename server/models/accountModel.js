const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    balance: {
      type: Number,
      default: 0,
      required: [true, "Siz balanceni kiritishingiz kerak"],
    },
  },
  {
    timestamps: true,
  }
);

const Account = mongoose.model("accounts", schema);

module.exports = Account;
