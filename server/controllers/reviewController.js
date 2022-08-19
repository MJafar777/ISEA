const Reviews = require("../models/reviewModel");
const User = require("../models/userModel");

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

  const hasUser = await User.findOne({
    userId: req.body.userId,
  });

  if (hasUser) {
    const reviewBook = await Reviews.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
  }

  console.log(hasUser);

  res.status(200).json({
    message: "hasUser",
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
