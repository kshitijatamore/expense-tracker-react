const Transaction = require("../models/Transaction");

exports.createTransaction = async (req, res) => {
  try {

     console.log("REQ USER:", req.user);
    const { type, amount, category, date } = req.body;

    const transaction = new Transaction({
      type,
      amount,
      category,
      date,
      user: req.user
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
      user: req.user
    });

    res.json(data);

  } catch (err) {
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

  } catch (err) {
    res.status(500).json({
      error: "Server error"
    });
  }
};