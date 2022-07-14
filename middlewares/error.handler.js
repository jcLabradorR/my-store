const { stack } = require("../routes/productsRouter");

function logErrors(err, req, res, next) {
  console.log('logError 1');
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  console.log('errorHandler 2');
  return res.status(409).json({
    message:  err.message,
    stack: err.stack,
  });
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    return res.status(output.statusCode).json(output.payload);
  }
    next(err);
}

module.exports = { logErrors, errorHandler, boomErrorHandler };
