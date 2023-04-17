const User = require("./../models/User");
const attachCookie = require("./../utils/attachCookie");
const BadRequestError = require("./../errors/badRequest");
//const NotFoundError = require("./../errors/notFound");
const UnAuthenticatedError = require("./../errors/unAuthenticated");

exports.signup = async (req, res, next) => {
  const { email, password, username } = req.body;

  //! check validity
  if (!email || !password || !username) {
    throw new BadRequestError("Please submit all the values!");
  }

  //! check if user exists
  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError("Email already in use!");
  }

  //! create user
  const user = await User.create({ email, password, username });

  //! create & attach cookie
  const token = await user.createJWT();
  attachCookie({ res, token });
  user.password = undefined;
  res.status(201).json({ user });
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  //! check validity
  if (!email || !password) {
    throw new BadRequestError("Please submit all the values!");
  }

  //! search if user exists
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new UnAuthenticatedError("Invalid credentials!");
  }

  //! compare passwords
  const passwordMatch = await user.passwordsMatch(password);
  if (!passwordMatch) {
    throw new UnAuthenticatedError("Invalid credentials!");
  }

  //! create JWT
  const token = user.createJWT();
  user.password = undefined;
  attachCookie({ res, token });
  res.status(200).json({
    user,
  });
};

exports.getCurrentUserData = async (req, res) => {
  const { userId } = req.user;
  const user = await User.findOne({ _id: userId });

  res.status(200).json({ user });
};

exports.logout = async (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now() + 1000),
  });
  res.status(200).json({ msg: "Logged out" });
};
