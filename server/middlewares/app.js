const express = require("express");
const app = express();
const morgan = require("morgan");
const newsRouter = require("../routes/newsRouter");

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/news", newsRouter);

module.exports = app;
