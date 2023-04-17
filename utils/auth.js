const UnAuthenticatedError = require("./../errors/unAuthenticated");
const jwt = require("jsonwebtoken");

const authenticateUser = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) throw new UnAuthenticatedError("Invalid credentials!");

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId };
    next();
  } catch (err) {
    throw new UnAuthenticatedError("Invalid credentials!");
  }
};

module.exports = authenticateUser;
