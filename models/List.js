const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const listSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    minLength: [2, "Enter a valid title (min. 2 characters)"],
    maxLength: [20, "Enter a valid title (max. 20 characters)"],
    required: [true, "A list must have a title"],
  },
  password: {
    type: String,
    trim: true,
    minLength: [4, "Enter a valid password (min. 4 characters)"],
    maxLength: [10, "Enter a valid password (max. 10 characters)"],
    required: [true, "A list must have a password"],
  },
  userAdmin: {
    type: mongoose.Types.ObjectId,
  },
  shopsList: {
    type: [String],
    default: [],
  },
  userList: {
    type: [mongoose.Types.ObjectId],
  },
});

listSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(4);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

listSchema.methods.passwordsMatch = async function (password) {
  const isMatch = await bcrypt.compare(password, this.password);
  return isMatch;
};

const List = mongoose.model("List", listSchema);

module.exports = List;
