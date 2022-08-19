const accountRouter = require("express").Router();

const accountController = require("../controllers/accountController");

accountRouter
  .route("/")
  .get(accountController.getAllAccount)
  .post(accountController.addAccount);

accountRouter
  .route("/:id")
  .get(accountController.getOneAccount)
  .patch(accountController.updateAccount)
  .delete(accountController.deleteAccount);

module.exports = accountRouter;
