const User = require("../models/userModel");

const catchErrBig = require("../utility/catchErrBig");

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

module.exports = { getAllUser, addUser, updateUser, getOneUser, deleteUser };
