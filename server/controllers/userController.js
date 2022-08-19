const User = require("../models/userModel");

const catchErrBig = require("../utility/catchErrBig");
const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("./handlerController");

const getAllUser = catchErrBig(async (req, res, next) => {
  getAll(req, res, next, User);
});

module.exports = { getAllUser };
