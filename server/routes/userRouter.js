const userRouter = require("express").Router();
const authController = require("../controllers/authController");

userRouter.route("/sign-up").post(authController.signUp);

module.exports = userRouter;
