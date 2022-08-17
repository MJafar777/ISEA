const express = require("express");
const app = express();
const morgan = require("morgan");
const newsRouter = require("../routes/newsRouter");
const booksRouter = require("../routes/booksRouter");
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

app.all("*", (req, res, next) => {
  return next(new AppError("This page has not defined", 404));
});

app.use(errController);

module.exports = app;
