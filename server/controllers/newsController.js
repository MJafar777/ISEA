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
  add(req, res, next, News);
};

exports.getOne = async (req, res, next) => {
  getOne(req, res, next, News);
};

exports.updateNews = async (req, res, next) => {
  update(req, res, next, News);
};

exports.deleteNews = async (req, res, next) => {
  deleteData(req, res, next, News);
};
