const AdvancedProfile = require("../models/advancedProfileModel");

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

const getAllAdvancedProfile = async (req, res, next) => {
  getAll(req, res, next, AdvancedProfile, options);
};

const addAdvancedProfile = async (req, res, next) => {
  add(req, res, next, AdvancedProfile);
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
