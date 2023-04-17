const express = require("express");
require("express-async-errors");
const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan");

const app = express();

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

const connectDb = require("./utils/connectDb");
const cookieParser = require("cookie-parser");

const authRouter = require("./routers/authRoutes");
const routeNotFoundMiddleware = require("./middleware/routeNotFoundHandler");
const errorMiddleware = require("./middleware/errorHandler");

//! MIDDLEWARE

//* cookie parser
app.use(cookieParser());
//* json
app.use(express.json());

//! ROUTERS
app.use("/api/v1/auth", authRouter);

//! ERROR MIDDLEWARE
//* route not found
app.use(routeNotFoundMiddleware);
//* error middleware
app.use(errorMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    // connect to DB
    await connectDb(process.env.DB_CONNECTION_STRING);
    // start server
    app.listen(port, () => console.log(`Server is listening on port ${port}...`));
  } catch (err) {
    console.log(`An error ocurred: ${err}`);
  }
};

start();
