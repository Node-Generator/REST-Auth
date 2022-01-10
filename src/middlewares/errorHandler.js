export const errorHandler = (error, req, res, next) => {
  if (error) {
    return res.status(error.status).json({
      message: error.message,
    });
  }
  return next();
};
