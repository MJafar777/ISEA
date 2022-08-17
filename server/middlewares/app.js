const express = require("express");
const app = express();
const morgan = require("morgan");

//---- Routes -----
const newsRouter = require("../routes/newsRouter");
const booksRouter = require("../routes/booksRouter");
const userRouter = require("../routes/userRouter");

//---- Routes -----

const cors = require("cors");
const AppError = require("../utility/AppError");
const errController = require("../controllers/errController");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/news", newsRouter);
app.use("/api/v1/books", booksRouter);
app.use("/api/v1/users", userRouter);

app.all("*", (req, res, next) => {
  return next(new AppError("This page has not defined", 404));
});

app.use(errController);

module.exports = app;
