const Reviews = require("../models/reviewModel");

const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("./handlerController");

const options = {
  path: "userId",
};
const options2 = {
  path: "bookId",
};
const options3 = {
  path: "projectId",
};

const getAllReviews = async (req, res, next) => {
  getAll(req, res, next, Reviews, options, options2, options3);
};

const addReviews = async (req, res, next) => {
  // add(req, res, next, Reviews);
  let data;

  const hasUser = await Reviews.findOne({
    userId: req.body.userId,
  });

  if (hasUser) {
    data = await Reviews.findByIdAndUpdate(
      hasUser._id,
      {
        userId: req.body.userId,
        bookId: req.body.bookId,
        projectId: req.body.projectId,
        reviewBook: req.body.reviewBook,
        reviewProject: req.body.reviewProject,
      },
      {
        new: true,
      }
    );
  } else {
    data = await Reviews.create({
      userId: req.body.userId,
      bookId: req.body.bookId,
      projectId: req.body.projectId,
      reviewBook: req.body.reviewBook,
      reviewProject: req.body.reviewProject,
    });
  }

  res.status(200).json({
    status: "succes",
    message: "Review qoshildi",
    data: data,
  });
};

const updateReviews = async (req, res, next) => {
  update(req, res, next, Reviews);
};
const getOneReviews = async (req, res, next) => {
  getOne(req, res, next, Reviews, options, options2, options3);
};
const deleteReviews = async (req, res, next) => {
  deleteData(req, res, next, Reviews);
};

module.exports = {
  getAllReviews,
  addReviews,
  updateReviews,
  getOneReviews,
  deleteReviews,
};
