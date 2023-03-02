const express = require("express");
const { protect } = require("../controllers/authController");
const expenseController = require("../controllers/expenseController");

const router = express.Router();

router
  .route("/")
  .get(protect, expenseController.listExpense)
  .post(protect, expenseController.addExpense);
router
  .route("/:id")
  .patch(protect, expenseController.updateExpense)
  .delete(protect, expenseController.deleteExpense);

module.exports = router;
