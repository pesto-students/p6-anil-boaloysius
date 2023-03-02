const express = require("express");
const { protect } = require("../controllers/authController");
const incomeController = require("../controllers/incomeController");

const router = express.Router();

router
  .route("/")
  .get(protect, incomeController.listIncome)
  .post(protect, incomeController.addIncome);
router
  .route("/:id")
  .patch(protect, incomeController.updateIncome)
  .delete(protect, incomeController.deleteIncome);

module.exports = router;
