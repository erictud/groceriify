const errorHandler = (err, req, res, next) => {
  const defaultErr = {
    status: err.statusCode || 500,
    message: err.message || "Something went wrong! Please try again!",
  };
  if (err.name === "ValidationError") {
    defaultErr.status = 400;
    defaultErr.message = Object.values(err.errors)
      .map((item) => item.message)
      .join(", ");
  }
  if (err.code && err.code === 11000) {
    defaultErr.status = 400;
    defaultErr.message = `${Object.keys(err.keyValue)} field has to be unique`;
  }
  // console.log("lol", defaultErr);
  res.status(defaultErr.status).json({ msg: defaultErr.message });
};

module.exports = errorHandler;
