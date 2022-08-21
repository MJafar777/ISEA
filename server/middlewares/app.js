const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const cookie = require("cookie-parser");

//---- Routes -----
const newsRouter = require("../routes/newsRouter");
const booksRouter = require("../routes/booksRouter");
const userRouter = require("../routes/userRouter");
const accountRouter = require("../routes/accountRouter");
const advancedProfil = require("../routes/advancedProfile");
const projectRouter = require("../routes/projectRouter");
const reviewRouter = require("../routes/reviewRouter");

//---- Routes -----
const cors = require("cors");
const AppError = require("../utility/AppError");
const errController = require("../controllers/errController");

app.use(cors());

app.use(morgan("dev"));
app.use(express.json());

// app.set("view engine", "html");

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1/news", newsRouter);
app.use("/api/v1/books", booksRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/accounts", accountRouter);
app.use("/api/v1/advancedProfil", advancedProfil);
app.use("/api/v1/projects", projectRouter);
app.use("/api/v1/reviews", reviewRouter);

// app.all("*", (req, res, next) => {
//   return next(new AppError("This page has not defined", 404));
// });

// app.use(errController);

module.exports = app;
