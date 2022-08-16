const Books = require("../models/bookModels");

exports.getBooks = async (req, res, next) => {
  const books = await Books.find();

  res.status(200).json({
    status: "success",
    length: books.length,
    books,
  });
};

exports.addBooks = async (req, res, next) => {
  const { section, title, language, description, category, publisher } =
    req.body;
  const books = await Books.create({
    section,
    title,
    category,
    publisher,
    description,
    language,
  });
  res.status(201).json({
    status: "success",
    books,
  });
};

exports.getOne = async (req, res, next) => {
  const { id } = req.params;
  const books = await Books.findById(id);

  res.status(201).json({
    status: "success",
    books,
  });
};

exports.updateBooks = async (req, res, next) => {
  const { id } = req.params;
  const books = await Books.findByIdAndUpdate(id, req.body);
  res.status(203).json({
    status: "success",
  });
};

exports.deleteBooks = async (req, res, next) => {
  const { id } = req.params;
  const books = await Books.findByIdAndRemove(id);
  res.status(203).json({
    status: "success",
  });
};
