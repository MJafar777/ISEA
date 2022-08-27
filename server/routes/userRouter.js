const userRouter = require("express").Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const multer = require("../utility/multer");

userRouter.route("/signup").post(authController.signUp);
userRouter.route("/verify").post(authController.verify);
userRouter.route("/register").post(authController.register);
userRouter.route("/login").post(authController.login);
userRouter
  .route("/upload")
  .post(multer.uploadUserImage, multer.resizeImage, userController.updateImage);

userRouter
  .route("/")
  .get(userController.getAllUser)
  .post(multer.uploadUserImage, multer.resizeImage, userController.addUser);

userRouter
  .route("/:id")
  .get(userController.getOneUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = userRouter;
