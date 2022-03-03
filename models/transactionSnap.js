const mongoose = require("mongoose");

const transactionSnapSchema = new mongoose.Schema({
  value: Number,
  description: String,
  date: Date,
});

const transactionSnap = mongoose.model("new", transactionSnapSchema);

module.exports = transactionSnap;
