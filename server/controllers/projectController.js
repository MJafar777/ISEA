const Project = require("../models/projectModel");
const AppError = require("../utility/appError");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

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
  const { token } = req.body;
  const userCheck = await jwt.verify(token, process.env.JWT_SECRET_KEY);
  const user = await User.findById(userCheck.id);
  if (!user) next(new AppError("Bunday user mavjud emas", 403));
  if (!user.advanced) next(new AppError("Proyect qushish uchun", 404));

  const data = {
    title: req.body.title,
    description: req.body.description,
    sub_description: req.body.sub_description,
    presentation: req.files.presentation[0].filename,
    projectImage: req.files.projectImage[0].filename,
    userId: user._id,
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
