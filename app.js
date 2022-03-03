require("dotenv").config();
const Axios = require("axios");
const express = require("express");
const cors = require("cors");
const databaseRouter = require(`${__dirname}/routes/databaseRoutes.js`);
//instantiating an instance of express

//just whitelists all origins where we get a request from the server
//so you will need to put a url when you deploy it
//for socekt io and http cors
const app = express();
//.use methods
app.use(cors());
app.use(express.json());

const relativify = (links) => {
  let prev = links.prev;
  let next = links.next;

  if (prev) {
    //replace the ups api with nothing
    prev = prev.replace(process.env.Base, "");
  }
  if (next) {
    next = next.replace(process.env.Base, "");
  }
  return { prev, next };
};

const options = {
  headers: {
    Authorization: `Bearer ${process.env.Token}`,
  },
};

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.get("/transactions", async (req, res) => {
  const url = `${process.env.Base}${req.url}`;
  console.log(req.url);
  const { data } = await Axios.get(url, options);
  const relativeData = { ...data, links: relativify(data.links) };
  res.send(relativeData);
});

app.use("/database", databaseRouter);

module.exports = app;
