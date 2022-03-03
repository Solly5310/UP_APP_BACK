const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  value: Number,
  description: String,
  date: Date,
});

const transaction = mongoose.model("new2", transactionSchema);

module.exports = transaction;
