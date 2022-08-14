const router = require("express").Router();
const controller = require("../controllers/newsController");

router.route("/").get(controller.getNews).post(controller.addNews);
router
  .route("/:id")
  .get(controller.getOne)
  .patch(controller.updateNews)
  .delete(controller.deleteNews);

module.exports = router;
