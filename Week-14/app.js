const express = require("express");
const morgan = require("morgan");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

const authRoute = require("./routes/authRoutes");
const incomeRoute = require("./routes/incomeRoutes");
const expenseRoute = require("./routes/expenseRoutes");

const app = express();

// 1) Middlewares
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/expense", expenseRoute);
app.use("/api/v1/income", incomeRoute);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl}`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
