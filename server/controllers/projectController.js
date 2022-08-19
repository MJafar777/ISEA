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
  add(req, res, next, Project);
};

const updateProject = async (req, res, next) => {
  update(req, res, next, Project);
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
