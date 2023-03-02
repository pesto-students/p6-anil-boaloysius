const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const Income = require("../models/incomeModel");

exports.listIncome = catchAsync(async (req, res, next) => {
  let query = {};
  if (req.query.year) {
    query.$expr = { $eq: [{ $year: "$date" }, req.query.year] };
  } else if (req.query.month) {
    query.$expr = { $eq: [{ $month: "$date" }, req.query.month] };
  }

  console.log(query, req.query.year);

  const incomeList = await Income.find({ user: req.user, ...query });
  res.status(201).json({
    status: "success",
    data: {
      incomes: incomeList,
    },
  });
});

exports.addIncome = catchAsync(async (req, res, next) => {
  const { user } = req;
  const { name, amount, date } = req.body;
  console.log(user, name, amount, date);
  const newIncome = await Income.create({ user, name, amount, date });
  res.status(201).json({
    status: "success",
    data: {
      income: newIncome,
    },
  });
});

exports.updateIncome = catchAsync(async (req, res, next) => {
  const income = await Income.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!income) {
    return next(new AppError("No income found with that ID", 404));
  }
  res.status(200).json({ status: "success", data: { income } });
});

exports.deleteIncome = catchAsync(async (req, res, next) => {
  const income = await Income.findByIdAndDelete(req.params.id);
  if (!income) {
    return next(new AppError("No income found with that ID", 404));
  }
  res.status(204).json({ status: "success", data: null });
});
