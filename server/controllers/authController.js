const Code = require("../models/codeModel");
const User = require("../models/userModel");
const catchErrLittle = require("../utility/catchErrorLitlle");
const Email = require("../utility/mail");
const jwt = require("jsonwebtoken");
const AppError = require("../utility/appError");
const bcrypt = require("bcryptjs");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: 30 * 60 * 1000,
  });
};

const createTokenAfterEntering = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: 10 * 24 * 60 * 60 * 1000,
  });
};

const signUp = async (req, res, next) => {
  try {
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
        return next(
          new AppError(
            "Siz bu email bilan royhatdan otgansiz.Iltimos tizimga kirishni bosing."
          )
        );
      } else {
        const newUser = await Code.create({
          email_or_phone: user.email,
          code: randomCode,
          verified: false,
        });
        token = createToken(newUser._id);
      }
      // await new Email(user, randomCode).sendCode("Verify code");
    }

    res.status(200).json({
      status: "Succes",
      token: token,
      message: "Emailingizga kod jo'natildi",
    });
  } catch (e) {
    res.status(400).json({ status: "failed" });
  }
};

const verify = async (req, res, next) => {
  try {
    const { token } = req.body;
    console.log(token);

    const getCode = await jwt.verify(
      req.body?.token,
      process.env.JWT_SECRET_KEY
    );

    const user = await Code.findById(getCode.id);

    if (!user) {
      return next(new AppError("User has not defined", 400));
    }

    console.log(user);

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
  } catch (e) {
    res.status(400).json({ status: "failed", message: e.message });
  }
};

const register = catchErrLittle(async (req, res, next) => {
  console.log(req.body);
  const getCode = await jwt.verify(req.body.token, process.env.JWT_SECRET_KEY);
  console.log(getCode);
  const user = await Code.findById(getCode.id);

  // if (!user.verified) {
  //   return next(
  //     new AppError(
  //       "Siz verificationdan otmagansiz.Iltimos verificationdan oting !",
  //       404
  //     )
  //   );
  // }

  const newUser = await User.create({
    name: req.body.name,
    surname: req.body.surname,
    name_of_father: req.body.name_of_father,
    gender: req.body.gender,
    email: user.email_or_phone,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    role: req.body.role,
  });

  const token = createTokenAfterEntering(newUser._id);

  res.status(200).json({
    status: "success",
    token: token,
    message: "Siz muvaffaqiyatli royhatdan otdingiz",
    data: newUser,
  });
});

const login = catchErrLittle(async (req, res, next) => {
  // 1.Email bilan password borligini tekshirish

  const { email, password } = req.body;

  if (!email || !password) {
    // or har doim trueni qidirardi
    return next(new AppError("Email yoki password kiriting xato!", 401));
  }

  // 2.Shunaqa odam bormi yoqmi

  const user = await User.findOne({
    email,
  }).select("+password");

  if (!user) {
    return next(
      new AppError("Bunday user mavjud emas.Iltimos royhatdan oting")
    );
  }

  // 3.Passwordni solishtirish

  const tekshirHashga = async (oddiyPassword, hashPAssword) => {
    return await bcrypt.compare(oddiyPassword, hashPAssword);
  };

  if (!(await tekshirHashga(password, user.password))) {
    return next(
      new AppError(
        "Sizning email yoki parolingiz xato iltimos qayta urining",
        401
      )
    );
  }

  // 4.JWT token yasab berish

  const token = createTokenAfterEntering(user._id);

  // Response qaytarish

  res.status(200).json({
    status: "succes",
    token: token,
    user: user,
    message: "Muvaffaqiyatli otdingiz",
  });

  next();
});

module.exports = { signUp, verify, register, login };
