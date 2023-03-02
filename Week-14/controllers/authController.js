const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  //   For security reasons, don't allow users
  //   to pass unintended fields while creating the user.
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  const token = signToken(newUser._id);

  res.status(201).json({
    status: "success",
    token: token,
    data: {
      user: newUser,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  //   1) Check if email and password exists
  if (!email || !password) {
    return next(new AppError("Please email and password", 400));
  }
  //   2) Check if email and password are correct
  let correct = false;
  const user = await User.findOne({ email }).select("+password"); // "+password" because password is hidden in the schema
  if (!!user) {
    correct = await user.validPassword(password, user.password);
  }

  if (!correct) {
    return next(new AppError("Incorrect email or password", 401));
  }

  //   3) Send token
  const token = signToken(user._id);

  res.status(200).json({
    status: "success",
    token,
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  //   1) Get token and check if it exists
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  console.log(token);
  if (!token) {
    next(
      new AppError("You are not logged in! Please login to get access.", 401)
    );
  }

  //   2) Verify token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  //   3) Check if user still exists
  const freshUser = await User.findById(decoded.id);
  if (!freshUser) {
    return next(
      new AppError("User belonging to the token doesn't not exist!", 401)
    );
  }

  //   Grant access to the protected routes
  req.user = freshUser;
  next();
});
