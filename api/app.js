const tokenChecker = require("./token_checker/token_checker")
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const JWT = require("jsonwebtoken");
const cors = require('cors');

const postsRouter = require("./routes/posts");
const authenticationRouter = require("./routes/authentication");
const usersRouter = require("./routes/users");
const commentsRouter = require('./routes/comments');
const homepageRouter = require("./routes/homepage");

const app = express();

// setup for receiving JSON

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "https://acebook-team-earth.onrender.com",
  }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));


// route setup
app.use("/", homepageRouter);
app.use("/posts", tokenChecker, postsRouter);
app.use("/comments", tokenChecker, commentsRouter)
app.use("/tokens", authenticationRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  console.log(err)
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // respond with details of the error
  res.status(err.status || 500).json({message: 'server error'})
});

module.exports = app;
