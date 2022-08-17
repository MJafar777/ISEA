const userRouter = require("express").Router();
const authController = require("../controllers/authController");

userRouter.route("/signup").post(authController.signUp);
userRouter.route("/verify").post(authController.verify);
userRouter.route("/register").post(authController.register);
userRouter.route("/login").post(authController.login);

module.exports = userRouter;
