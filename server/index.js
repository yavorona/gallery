// server index file
const path = require("path");
const DIST_DIR = path.join(__dirname, "/../client/dist");
const express = require("express");
const app = express();
const port = 3000;
const db = require("./db.js");
const { fetch } = require("./helpers");
// const controller = require("./controller.js");

app.use(express.static(DIST_DIR));

app.use(express.json());

app.get("/gallery/:id", (req, res) => {
  console.log("server recieved get for gallery route");
  db.findOne(req.params, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
  // fetch("cambodia", data => {
  //   console.log("server recieved: ", data);
  //   res.send(data);
  // });
});

app.listen(port, () => {
  console.log(`Express listening on ${port}`);
});

module.exports = app;
