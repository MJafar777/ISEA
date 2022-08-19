const projectRouter = require("express").Router();

const projectController = require("../controllers/projectController");

projectRouter
  .route("/")
  .get(projectController.getAllProject)
  .post(projectController.addProject);

projectRouter
  .route("/:id")
  .get(projectController.getOneProject)
  .patch(projectController.updateProject)
  .delete(projectController.deleteProject);

module.exports = projectRouter;
