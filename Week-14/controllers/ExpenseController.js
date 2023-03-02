const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const Expense = require("../models/expenseModel");

exports.listExpense = catchAsync(async (req, res, next) => {
  let query = {};
  if (req.query.year) {
    query.$expr = { $eq: [{ $year: "$date" }, req.query.year] };
  } else if (req.query.month) {
    query.$expr = { $eq: [{ $month: "$date" }, req.query.month] };
  }

  console.log(query, req.query.year);

  const expenseList = await Expense.find({ user: req.user, ...query });
  res.status(201).json({
    status: "success",
    data: {
      expenses: expenseList,
    },
  });
});

exports.addExpense = catchAsync(async (req, res, next) => {
  const { user } = req;
  const { name, amount, date } = req.body;
  console.log(user, name, amount, date);
  const newExpense = await Expense.create({ user, name, amount, date });
  res.status(201).json({
    status: "success",
    data: {
      expenses: newExpense,
    },
  });
});

exports.updateExpense = catchAsync(async (req, res, next) => {
  const expense = await Expense.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!expense) {
    return next(new AppError("No expense found with that ID", 404));
  }
  res.status(200).json({ status: "success", data: { expense } });
});

exports.deleteExpense = catchAsync(async (req, res, next) => {
  const expense = await Expense.findByIdAndDelete(req.params.id);
  if (!expense) {
    return next(new AppError("No expense found with that ID", 404));
  }
  res.status(204).json({ status: "success", data: null });
});
