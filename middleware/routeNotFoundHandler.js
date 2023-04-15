const routeNotFoundMiddleware = (req, res) => {
  return res
    .status(404)
    .json({ msg: `The following route is not defined: ${req.baseUrl + req.path}` });
};

module.exports = routeNotFoundMiddleware;
