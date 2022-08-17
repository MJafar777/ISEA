const Code = require("../models/codeModel");
const User = require("../models/userModel");
const catchErrLittle = require("../utility/catchErrorLitlle");
const Email = require("../utility/mail");
const jwt = require("jsonwebtoken");

const saveCookie = (req, res, token) => {
  res.cookie("code", token, {
    maxAge: process.env.CODE_COOKIE,
    httpOnly: true,
    secure: process.env.NODE_ENV == "DEVELOPMENT" ? false : true,
  });
};
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: 600000,
  });
};

const signUp = catchErrLittle(async (req, res, next) => {
  let token;

  const randomCode = Math.round(Math.random() * 900000 + 100000);

  if (req.body.email) {
    const user = {
      email: req.body.email,
    };
    console.log(user);

    const hasEmail = await Code.findOne({
      email_or_phone: user.email,
    });

    if (hasEmail) {
      await Code.findByIdAndUpdate(hasEmail._id, {
        code: randomCode,
        expired_date: Number(Date.now()) + 600000,
      });
      token = createToken(hasEmail._id);
    } else {
      const newUser = await Code.create({
        email_or_phone: user.email,
        code: randomCode,
      });
      token = createToken(newUser._id);
    }
    await new Email(user, randomCode).sendCode();
  }

  req.email = req.body.email;

  saveCookie(req, res, token);

  res.status(200).json({
    status: "Succes",
    message: "Emailingizga kod jo'natildi",
  });

  next();
});

console.log(catchErrLittle);

module.exports = { signUp };
