// server index file
const path = require("path");
const DIST_DIR = path.join(__dirname, "/../client/dist");
const express = require("express");
const parser = require("body-parser");
const app = express();
const port = 3000;
const db = require("./db.js");
const { fetch } = require("./helpers");
// const controller = require("./controller.js");

app.use("/:id/", express.static(DIST_DIR));
app.use(parser.urlencoded({ extended: true }));

app.use(express.json());

app.get("/hotels/:id/", (req, res) => {
  console.log(req.params);
  let galleryId = req.params.id;
  return db.findOne({ id: galleryId }).then(photos => {
    res.send(photos);
  });
});
// fetch("cambodia", data => {
//   console.log("server recieved: ", data);
//   res.send(data);
// });

app.listen(port, () => {
  console.log(`Express listening on ${port}`);
});

module.exports = app;
