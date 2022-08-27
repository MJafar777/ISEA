const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const catchErrBig = require("../utility/catchErrBig");
const AppError = require("../utility/AppError");
const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("./handlerController");

const options = {
  path: "accountId",
};
const options2 = {
  path: "advanced_profile",
};
const options3 = {
  path: "user_projects",
};

const getAllUser = async (req, res, next) => {
  getAll(req, res, next, User, options, options2, options3);
};

const addUser = async (req, res, next) => {
  const datas = await User.create({
    name: req.body.name,
    surname: req.body.surname,
    name_of_father: req.body.name_of_father,
    gender: req.body.gender,
    photo: req.file.filename,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    role: req.body.role,
  });
  res.status(201).json({
    status: "success",
    datas: datas,
  });
};

const updateUser = async (req, res, next) => {
  update(req, res, next, User);
};
const getOneUser = async (req, res, next) => {
  getOne(req, res, next, User, options, options2, options3);
};
const deleteUser = async (req, res, next) => {
  deleteData(req, res, next, User);
};
const updateImage = async (req, res, next) => {
  try {
    const { token } = req.body;
    console.log(token, req.file);
    const verify = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!verify) next(new AppError("Siz ruyhatdan utmagansiz", 401));
    const user = await User.findById(verify.id);
    if (!user) next("Bunday user mavjud emas", 403);
    user.photo = req.file.filename;
    await user.save({ validateBeforeSave: false });
    res.status(203).json({ status: "success" });
  } catch (e) {
    next(e.message, 404);
  }
};

const checkMe = async (req, res, next) => {
  const { token } = req.body;
  const checkVerify = jwt.verify(token, process.env.JWT_SECRET_KEY);

  if (!checkVerify) next(new AppError("Sizning exprires datetis tugagan"));
  const user = await User.findById(checkVerify.id);

  if (!user) next(new AppError("Bunday user mavjud emas", 401));

  res.status(201).json({ status: "success", user });
};

module.exports = {
  getAllUser,
  addUser,
  updateUser,
  getOneUser,
  deleteUser,
  updateImage,
  checkMe,
};
