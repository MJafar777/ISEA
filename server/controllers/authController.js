const Code = require("../models/codeModel");
const User = require("../models/userModel");
const catchErrLittle = require("../utility/catchErrorLitlle");
const Email = require("../utility/mail");
const jwt = require("jsonwebtoken");

const saveCookie = (req, res, token) => {
  res.cookie("code", token, {
    maxAge: 1 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: process.env.NODE_ENV == "DEVELOPMENT" ? false : true,
  });
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: 10 * 60 * 1000,
  });
};

const signUp = catchErrLittle(async (req, res, next) => {
  let token;

  const randomCode = Math.round(Math.random() * 900000 + 100000);

  if (req.body.email) {
    const user = {
      email: req.body.email,
    };

    const hasEmail = await Code.findOne({
      email_or_phone: user.email,
    });

    if (hasEmail) {
      await Code.findByIdAndUpdate(hasEmail._id, {
        code: randomCode,
        expired_date: Number(Date.now()) + 600000,
        verified: false,
      });

      token = createToken(hasEmail._id);
    } else {
      const newUser = await Code.create({
        email_or_phone: user.email,
        code: randomCode,
        verified: false,
      });
      token = createToken(newUser._id);
    }
    await new Email(user, randomCode).sendCode();
  }

  saveCookie(req, res, token);

  res.status(200).json({
    status: "Succes",
    message: "Emailingizga kod jo'natildi",
  });

  next();
});

const verify = catchErrLittle(async (req, res, next) => {
  const getCode = await jwt.verify(
    req.cookies.code,
    process.env.JWT_SECRET_KEY
  );

  const user = await Code.findById(getCode.id);

  if (!user) {
    return next(new AppError("User has not defined", 400));
  }

  if (!(user.code == req.body.code && user.expired_date > Date.now())) {
    return next(
      new AppError("Your code is invalid or your code has expired date", 400)
    );
  }

  user.verified = true;
  user.save();

  res.status(200).json({
    status: "success",
    message: "Email tasdiqlandi",
  });
});

const register = catchErrLittle(async (req, res, next) => {
  const getCode = await jwt.verify(
    req.cookies.code,
    process.env.JWT_SECRET_KEY
  );

  const user = await Code.findById(getCode.id);

  if (!user.verified) {
    return next(
      new AppError(
        "Siz verificationdan otmagansiz.Iltimos verificationdan oting !",
        404
      )
    );
  }

  const check = user.email_or_phone.includes("@");

  const data = await User.create({
    name: req.body.name,
    surname: req.body.surname,
    name_of_father: req.body.name_of_father,
    date_of_birth: req.body.date_of_birth,
    gender: req.body.gender,
    photo: req.body.photo,
    phone: check ? "" : user.email_or_phone,
    email: check ? user.email_or_phone : "",
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    role: req.body.role,
    phone_active: check ? false : true,
    email_active: check ? true : false,
  });

  res.status(200).json({
    status: "success",
    message: "Siz muvaffaqiyatli royhatdan otdingiz",
    data: data,
  });
});

module.exports = { signUp, verify, register };
