const Account = require("../models/accountModel");

const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("./handlerController");

const getAllAccount = async (req, res, next) => {
  getAll(req, res, next, Account);
};

const addAccount = async (req, res, next) => {
  add(req, res, next, Account);
};

const updateAccount = async (req, res, next) => {
  update(req, res, next, Account);
};
const getOneAccount = async (req, res, next) => {
  getOne(req, res, next, Account);
};
const deleteAccount = async (req, res, next) => {
  deleteData(req, res, next, Account);
};

module.exports = {
  getAllAccount,
  addAccount,
  updateAccount,
  getOneAccount,
  deleteAccount,
};
