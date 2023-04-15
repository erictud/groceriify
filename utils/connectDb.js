const mongoose = require("mongoose");

// db settings
mongoose.set("strictQuery", true);

const connectDb = (url) => {
  return mongoose.connect(url);
};

module.exports = connectDb;
