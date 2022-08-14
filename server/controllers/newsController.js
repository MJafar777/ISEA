const News = require("../models/newsModel");

exports.getNews = async (req, res, next) => {
  const news = await News.find();

  res.status(200).json({
    status: "success",
    length: news.length,
    news,
  });
};

exports.addNews = async (req, res, next) => {
  const { section, title, category, publisher } = req.body;
  const news = await News.create({ section, title, category, publisher });
  res.status(201).json({
    status: "success",
    news,
  });
};

exports.getOne = async (req, res, next) => {
  const { id } = req.params;
  const news = await News.findById(id);

  res.status(201).json({
    status: "success",
    news,
  });
};

exports.updateNews = async (req, res, next) => {
  const { id } = req.params;
  const news = await News.findByIdAndUpdate(id, req.body);
  res.status(203).json({
    status: "success",
  });
};

exports.deleteNews = async (req, res, next) => {
  const { id } = req.params;
  const news = await News.findByIdAndRemove(id);
  res.status(203).json({
    status: "success",
  });
};
