const Project = require("../models/projectModel");

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
  console.log(req.file);
  const data = {
    title: req.body.title,
    description: req.body.description,
    presentation: req.file.filename,
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
    presentation: req.file.filename,
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

module.exports = {
  getAllProject,
  addProject,
  updateProject,
  getOneProject,
  deleteProject,
};
