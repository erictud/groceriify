const express = require("express");
const authenticateUser = require("./../utils/auth");

const router = express.Router();

// verifies if is logged in
router.use(authenticateUser);

module.exports = router;
