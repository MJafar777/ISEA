const reviewRouter = require("express").Router();

const reviewController = require("../controllers/reviewController");

reviewRouter
  .route("/")
  .get(reviewController.getAllReviews)
  .post(reviewController.addReviews);

reviewRouter
  .route("/:id")
  .get(reviewController.getOneReviews)
  .patch(reviewController.updateReviews)
  .delete(reviewController.deleteReviews);

module.exports = reviewRouter;
