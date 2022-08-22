const Project = require("../models/projectModel");
const AppError = require("../utility/appError");

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

const getAllProject = async (req, res, next) => {
  getAll(req, res, next, Project, options);
};

const addProject = async (req, res, next) => {
  console.log(req.files);
  const data = {
    title: req.body.title,
    description: req.body.description,
    sub_description: req.body.sub_description,
    presentation: req.files.presentation[0].filename,
    projectImage: req.files.projectImage[0].filename,
    userId: req.body.userId,
    publisher: req.body.publisher,
    category: req.body.category,
  };
  const file = [data, "key"];

  add(req, res, next, Project, file);
};

const updateProject = async (req, res, next) => {
  const data = {
    title: req.body.title,
    description: req.body.description,
    presentation: req.files.presentation[0].filename,
    projectImage: req.files.projectImage[0].filename,
    userId: req.body.userId,
    publisher: req.body.publisher,
    category: req.body.category,
  };
  const file = [data, "key"];
  update(req, res, next, Project, file);
};
const getOneProject = async (req, res, next) => {
  getOne(req, res, next, Project, options);
};
const deleteProject = async (req, res, next) => {
  deleteData(req, res, next, Project);
};

const downloadProject = async (req, res, next) => {
  const { project } = req.params;
  res.download(
    `${__dirname}/../public/img/projects/${project}`,
    function (error) {
      console.log(error);
    }
  );
};

module.exports = {
  getAllProject,
  addProject,
  updateProject,
  getOneProject,
  deleteProject,
  downloadProject,
};
