const projectRouter = require("express").Router();

const projectController = require("../controllers/projectController");

const projectMulter = require("../utility/projectMulter");

projectRouter
  .route("/download/:project")
  .get(projectController.downloadProject);

projectRouter
  .route("/")
  .get(projectController.getAllProject)
  .post(projectMulter.uploadProjectFile, projectController.addProject);

projectRouter
  .route("/:id")
  .get(projectController.getOneProject)
  .patch(projectMulter.uploadProjectFile, projectController.updateProject)
  .delete(projectController.deleteProject);

module.exports = projectRouter;
