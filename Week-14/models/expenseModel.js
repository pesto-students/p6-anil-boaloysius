const mongoose = require("mongoose");

const ExpenseModel = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "User",
  },
  name: {
    type: String,
    required: [true, "Please tell us your name!"],
  },
  amount: {
    type: Number,
    required: [true, "Please add the amount"],
  },
  date: {
    type: Date,
    required: [true, "Please add a date"],
  },
});

module.exports = mongoose.model("Expense", ExpenseModel);
