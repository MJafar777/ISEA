const router = require("express").Router();
const controller = require("../controllers/booksController");

router.route("/").get(controller.getBooks).post(controller.addBooks);
router
  .route("/:id")
  .get(controller.getOne)
  .patch(controller.updateBooks)
  .delete(controller.deleteBooks);

module.exports = router;
