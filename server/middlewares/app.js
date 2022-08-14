const express = require("express");
const app = express();
const morgan = require("morgan");
const newsRouter = require("../routes/newsRouter");
const booksRouter = require("../routes/booksRouter");
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/news", newsRouter);
app.use("/api/v1/books", booksRouter);

module.exports = app;
