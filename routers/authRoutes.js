const express = require("express");
const rateLimiter = require("express-rate-limit");
const authController = require("./../controllers/authController");

const logInLimiter = rateLimiter({
  windowMs: 5 * 60 * 1000,
  max: 10,
  message: "Too many attempts! Try again in 5 minutes",
});

const router = express.Router();

router.route("/login").post(logInLimiter, authController.login);
router.route("/register").post(authController.signup);

module.exports = router;
