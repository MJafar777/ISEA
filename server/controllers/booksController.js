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
  const data = {
    title: req.body.title,
    language: req.body.language,
    category: req.body.category,
    section: {
      description: req.body.category.description,
    },
    description: req.body.description,
    book: req.file.filename,
    publisher: req.body.publisher,
  };
  const file = [data, "key"];
  add(req, res, next, Books, file);
};

exports.getOne = async (req, res, next) => {
  getOne(req, res, next, Books);
};

exports.updateBooks = async (req, res, next) => {
  const data = {
    title: req.body.title,
    language: req.body.language,
    category: req.body.category,
    section: {
      description: req.body.description,
    },
    description: req.body.description,
    book: req.file.filename,
    publisher: req.body.publisher,
  };
  const file = [data, "key"];
  update(req, res, next, Books, file);
};

exports.deleteBooks = async (req, res, next) => {
  deleteData(req, res, next, Books);
};
