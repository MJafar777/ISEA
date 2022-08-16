class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = this.statusCode == 404 ? "Fail" : "Error";
  }
}
module.exports = AppError;
