const Axios = require("axios");
const transactionSnap = require(`${__dirname}/../models/transactionSnap.js`);
const transaction = require(`${__dirname}/../models/transaction.js`);

const options = {
  headers: {
    Authorization: `Bearer ${process.env.Token}`,
  },
};

exports.testDatabase = async (req, res) => {
  try {
    const url = `${process.env.Base}/transactions?page[size]=100`;
    const { data } = await Axios.get(url, options);

    await data.data.map((data) => {
      transactionSnap.create({
        value: data.attributes.amount.value * 1,
        description: data.attributes.description,
        date: new Date(data.attributes.settledAt),
      });
    });

    res.status(200).json({ status: "OK", data: data.data });
  } catch (e) {
    console.log(e);
    res.status(400).json({ status: "fail", message: e });
  }
};

exports.submitTransaction = async (req, res) => {
  try {
    data = {
      value: req.body.Value * 1,
      description: req.body.Description,
      date: Date(req.body.Date),
    };
    console.log(data);
    await transaction.create(data);
    res
      .status(200)
      .json({ status: "OK", message: "Data saved in db", data: req.body });
  } catch (err) {
    res.status(400).json({ status: "nope", message: "sort it out" });
  }
};

exports.snapshotTransactions = async (req, res) => {
  try {
    const data = await transactionSnap.find().sort().limit(50);
    console.log(data.length);
    res.status(200).json({ status: "OK", message: "get that data mo", data });
  } catch (err) {
    res.status(400).json({ status: "nope", message: "sort it out" });
  }
};

exports.savedTransactions = async (req, res) => {
  try {
    const data = await transaction.find().sort();
    console.log(data);
    res.status(200).json({ status: "OK", data });
  } catch (err) {
    res.status(400).json({ status: "nope", message: "sort it out" });
  }
};
