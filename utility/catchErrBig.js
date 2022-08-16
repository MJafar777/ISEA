const appError = require("./appError");

const catchErrBig = (funksiya) => {
  const catchFunc = (req, res, next, Model, options, options2) => {
    funksiya(req, res, next, Model, options, options2).catch((err) =>
      next(new appError(err.message, 404))
    );
  };
  return catchFunc;
};
module.exports = catchErrBig;
