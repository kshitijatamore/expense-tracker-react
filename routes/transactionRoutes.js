const express = require("express");

const router = express.Router();

const authMiddleware = require(
  "../middleware/authMiddleware"
);

const {
  createTransaction,
  getTransactions,
  deleteTransaction
} = require(
  "../controllers/transactionController"
);

router.post(
  "/transactions",
  authMiddleware,
  createTransaction
);

router.get(
  "/transactions",
  authMiddleware,
  getTransactions
);

router.delete(
  "/transactions/:id",
  authMiddleware,
  deleteTransaction
);

module.exports = router;