const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide username"],
    trim: true,
    minLength: [4, "Username must have at least 4 characters"],
    maxLength: [20, "Username must have at maximum 20 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "Provide valid email",
    },
  },
  password: {
    type: String,
    trim: true,
    minLength: [8, "Password must have at least 8 characters"],
    required: [true, "Please provide password"],
  },
  shoppingLists: {
    type: [mongoose.Types.ObjectId],
    default: [],
  },
});

// Encrypting password middleware
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.passwordsMatch = async function (password) {
  const isMatch = await bcrypt.compare(password, this.password);
  return isMatch;
};

userSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

const User = mongoose.model("User", userSchema);

module.exports = User;
