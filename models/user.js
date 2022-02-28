const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
});

const Test = mongoose.model("test", userSchema);

module.exports = Test;
