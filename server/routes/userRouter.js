const userRouter = require("express").Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

userRouter.route("/signup").post(authController.signUp);
userRouter.route("/verify").post(authController.verify);
userRouter.route("/register").post(authController.register);
userRouter.route("/login").post(authController.login);

userRouter.route("/").get(userController.getAllUser);

module.exports = userRouter;
