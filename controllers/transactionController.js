const Transaction = require("../models/Transaction");

exports.createTransaction = async (req, res) => {
  try {

    const { type, amount, category, source, date } = req.body;

    const transaction = new Transaction({
      type,
      amount,
      category,
      source,
      date,
      user: req.user.id
    });

    await transaction.save();

    res.json(transaction);

  } catch (err) {
    res.status(500).json({
      error: "Server error"
    });
  }
};

exports.getTransactions = async (req, res) => {
  try {

    const data = await Transaction.find({
      user: req.user.id
    });

    res.json(data);

  } catch {
    res.status(500).json({
      error: "Server error"
    });
  }
};

exports.deleteTransaction = async (req, res) => {
  try {

    await Transaction.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Deleted"
    });

  } catch {
    res.status(500).json({
      error: "Server error"
    });
  }
};