require("dotenv").config();
const cors = require("cors");

const http = require("http");
const mongoose = require("mongoose");
const express = require("express");
const app = require("./app.js");
const port = process.env.PORT || 5000;

const server = http.createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.post("/webhooks", (req, res) => {
  console.log(req.body);
  res.send("thanks webhook");
  io.emit("webhook", req.body);
});

const DB = process.env.DATABASE.replace("<password>", process.env.DBPASSWORD);

mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((con) => {
    console.log("db connection success");
  });

server.listen(port, (req, res) => {
  console.log(`listening on port ${port}`);
});
