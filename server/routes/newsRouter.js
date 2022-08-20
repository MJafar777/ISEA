const router = require("express").Router();

const controller = require("../controllers/newsController");

const newsMulter = require("../utility/newsMulter");

router
  .route("/")
  .get(controller.getNews)
  .post(newsMulter.uploadNewsImage, newsMulter.resizeImage, controller.addNews);
router
  .route("/:id")
  .get(controller.getOne)
  .patch(
    newsMulter.uploadNewsImage,
    newsMulter.resizeImage,
    controller.updateNews
  )
  .delete(controller.deleteNews);

module.exports = router;
