const express = require("express");
const app = require("../app");
const router = express.Router();
const database = require(`${__dirname}/../controllers/databaseController.js`);
//const databaseController = require(`${__dirname}/../controllers/databaseController.js
//`);
/*
const testSchema = new mongoose.Schema({
  name: String,
});

const testing = mongoose.model("Test", testSchema);
*/

router.route("/").get(database.testDatabase).post(database.submitTransaction);

router.route("/snapshots").get(database.snapshotTransactions);
router.route("/saved").get(database.savedTransactions);
module.exports = router;
