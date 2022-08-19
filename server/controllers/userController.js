const User = require("../models/userModel");

const catchErrBig = require("../utility/catchErrBig");
const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("./handlerController");

const getAllUser = async (req, res, next) => {
  getAll(req, res, next, User);
};

const addUser = async (req, res, next) => {
  add(req, res, next, User);
};

const updateUser = async (req, res, next) => {
  update(req, res, next, User);
};
const getOneUser = async (req, res, next) => {
  getOne(req, res, next, User);
};
const deleteUser = async (req, res, next) => {
  deleteData(req, res, next, User);
};

module.exports = { getAllUser, addUser, updateUser, getOneUser, deleteUser };
