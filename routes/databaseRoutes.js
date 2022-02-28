const express = require("express");
const app = require("../app");
const router = express.Router();
const mongoose = require("mongoose");

const Test = require(`${__dirname}/../models/user.js`);
//const databaseController = require(`${__dirname}/../controllers/databaseController.js
//`);
/*
const testSchema = new mongoose.Schema({
  name: String,
});

const testing = mongoose.model("Test", testSchema);
*/

let testDatabase = async (req, res) => {
  try {
    console.log("request received");
    const yes = await Test.create({ name: "Sol" }).then(() => {
      res.status(200).json({ status: "OK", message: "Getting there!" });
    });
  } catch (e) {
    res.status(400).json({ status: "fail", message: err });
  }
};

router.route("/").get(testDatabase);

module.exports = router;
