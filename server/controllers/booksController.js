const Books = require("../models/bookModels");

const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("./handlerController");

exports.getBooks = async (req, res, next) => {
  getAll(req, res, next, Books);
};

exports.addBooks = async (req, res, next) => {
  add(req, res, next, Books);
};

exports.getOne = async (req, res, next) => {
  getOne(req, res, next, Books);
};

exports.updateBooks = async (req, res, next) => {
  update(req, res, next, Books);
};

exports.deleteBooks = async (req, res, next) => {
  deleteData(req, res, next, Books);
};
