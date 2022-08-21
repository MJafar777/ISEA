const News = require("../models/newsModel");

const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("./handlerController");

exports.getNews = async (req, res, next) => {
  getAll(req, res, next, News);
};

exports.addNews = async (req, res, next) => {
  const data = {
    title: req.body.title,
    description: req.body.description,
    photo: req.file.filename,
    publisher: req.body.publisher,
    category: req.body.category,
  };
  const file = [data, "key"];

  add(req, res, next, News, file);
};

exports.getOne = async (req, res, next) => {
  getOne(req, res, next, News);
};

exports.updateNews = async (req, res, next) => {
  const data = {
    title: req.body.title,
    description: req.body.description,
    photo: req.file.filename,
    publisher: req.body.publisher,
    category: req.body.category,
  };
  const file = [data, "key"];
  update(req, res, next, News, file);
};

exports.deleteNews = async (req, res, next) => {
  deleteData(req, res, next, News);
};
