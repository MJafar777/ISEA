const router = require("express").Router();
const controller = require("../controllers/booksController");

const bookMulter = require("../utility/bookMulter");

router.route("/download/:book").get(controller.downloadBook);

router
  .route("/")
  .get(controller.getBooks)
  .post(bookMulter.uploadProjectFile, controller.addBooks);
router
  .route("/:id")
  .get(controller.getOne)
  .patch(bookMulter.uploadProjectFile, controller.updateBooks)
  .delete(controller.deleteBooks);

module.exports = router;
