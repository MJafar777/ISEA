module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 404;
  err.status = err.status || "fail";
  err.message = err.message || "Page is not defined";

  if (err.message == "invalid signature") {
    err.message = "Your token is not valid";
  }

  if (process.env.NODE_ENV == "DEVELOPMENT") {
    res.status(err.statusCode).json({
      error: err,
      status: err.status,
      statusCode: err.statusCode,
      message: err.message,
      stack: err.stack,
    });
  }
  if (process.env.NODE_ENV == "PRODUCTION") {
    res.status(err.statusCode).json({
      error: err,
      status: err.status,
      message: err.message,
    });
  }
  next();
};

console.log(process.env.NODE_ENV);
