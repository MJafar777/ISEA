const AdvancedProfile = require("../models/advancedProfileModel");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const {
  getAll,
  getOne,
  add,
  update,
  deleteData,
} = require("./handlerController");
const AppError = require("../utility/appError");

const options = {
  path: "userId",
};

const getAllAdvancedProfile = async (req, res, next) => {
  getAll(req, res, next, AdvancedProfile, options);
};

const addAdvancedProfile = async (req, res, next) => {
  const {
    type_of_activity,
    academic_degree,
    degree,
    work_place,
    position,
    stir,
    cardNum,
    token,
  } = req.body;

  const userCheck = await jwt.verify(token, process.env.JWT_SECRET_KEY);
  const user = await User.findById(userCheck.id);
  if (!user) next(new AppError("Bunday user mavjud emas", 403));
  const advancedProfile = await AdvancedProfile.create({
    userId: user.id,
    type_of_activity,
    academic_degree,
    degree,
    work_place,
    position,
    stir,
    cardNum,
  });
  user.advanced = true;
  await user.save();
  res.status(200).json({ data: advancedProfile });
};

const updateAdvancedProfile = async (req, res, next) => {
  update(req, res, next, AdvancedProfile);
};
const getOneAdvancedProfile = async (req, res, next) => {
  getOne(req, res, next, AdvancedProfile, options);
};
const deleteAdvancedProfile = async (req, res, next) => {
  deleteData(req, res, next, AdvancedProfile);
};

module.exports = {
  getAllAdvancedProfile,
  addAdvancedProfile,
  updateAdvancedProfile,
  getOneAdvancedProfile,
  deleteAdvancedProfile,
};
