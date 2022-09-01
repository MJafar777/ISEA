const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userScheme = new mongoose.Schema(
  {
    accountId: {
      type: mongoose.Schema.ObjectId,
      ref: "accounts",
    },
    name: {
      type: String,
      trim: true,
      required: [true, "Siz ismingizni kiritishingiz shart"],
      minlength: [3, "Siz eng kamida 3 ta symbol ishlata olasiz"],
      maxlength: [30, "Siz eng kopida 12 ta symbol ishlata olasiz"],
    },
    surname: {
      type: String,
      trim: true,
      required: [true, "Siz familiyangizni kiritishingiz shart"],
      minlength: [3, "Siz eng kamida 3 ta symbol ishlata olasiz"],
      maxlength: [30, "Siz eng kopida 12 ta symbol ishlata olasiz"],
    },
    name_of_father: {
      type: String,
      trim: true,
      required: [true, "Siz otangizni ismini kiritishingiz shart"],
      minlength: [3, "Siz eng kamida 3 ta symbol ishlata olasiz"],
      maxlength: [30, "Siz eng kopida 12 ta symbol ishlata olasiz"],
    },
    gender: {
      type: String,
      required: [true, "Siz gender kiritishingiz kerak"],
      enum: ["male", "female"],
    },
    photo: {
      type: String,
      default: "default.jpeg",
    },
    email: {
      type: String,
      unique: true,
      validate: [validator.isEmail, "Emailni to'g'ri kirit"],
      lowerCae: true,
    },
    password: {
      type: String,
      required: [true, "Siz passwordni kiritishingiz shart"],
      minlength: [8, "Eng kamida 8 ta symbol ishlata olasiz"],
      maxlengt: [16, "Eng kopida 16 ta symbol ishlata olasiz"],
      validate: {
        validator: function (val) {
          return validator.isStrongPassword(val);
        },
        message: "Iltimos togri password kiriting!",
      },
      select: false, //responsega kemaydi lekin databasega yozadi password hich qachon kelishi keremas umuman
    },
    passwordConfirm: {
      type: String,
      required: true,
      validate: {
        validator: function (val) {
          return val == this.password;
        },
        message: "Iltimos siz bir xil password kiriting",
      },
    },
    role: {
      type: String,
      enum: ["user", "sponsor", "admin", "engineer"],
      default: "user",
    },
    active_user: {
      type: Boolean,
      default: true,
    },
    password_change_date: {
      type: Date,
      default: null,
    },
    advanced: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

userScheme.virtual("advanced_profile", {
  ref: "advanced_profiles", // collection nomi
  localField: "_id", // ozini id sini olib ketib
  foreignField: "userId", // tour fieldi bilan tekshiradi
});
userScheme.virtual("user_projects", {
  ref: "projects", // collection nomi
  localField: "_id", // ozini id sini olib ketib
  foreignField: "userId", // tour fieldi bilan tekshiradi
});

userScheme.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const hashPassword = await bcrypt.hash(this.password, 12);

  this.password = hashPassword;

  this.passwordConfirm = undefined; // pasword confirm bizga keremas shuning uchun databasega saqlash kerak emas shuning uchun undefined qib beramiz

  next();
});

const User = mongoose.model("users1", userScheme);

module.exports = User;
