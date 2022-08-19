const advancedProfileRouter = require("express").Router();

const advancedProfileController = require("../controllers/advancedProfileController");

advancedProfileRouter
  .route("/")
  .get(advancedProfileController.getAllAdvancedProfile)
  .post(advancedProfileController.addAdvancedProfile);

advancedProfileRouter
  .route("/:id")
  .get(advancedProfileController.getOneAdvancedProfile)
  .patch(advancedProfileController.updateAdvancedProfile)
  .delete(advancedProfileController.deleteAdvancedProfile);

module.exports = advancedProfileRouter;
