// server index file
const path = require("path");
const DIST_DIR = path.join(__dirname, "/../client/dist");
const express = require("express");
const parser = require("body-parser");
const app = express();
const port = 3000;
const db = require("./db.js");

app.use("/:id/", express.static(DIST_DIR));
app.use(parser.urlencoded({ extended: true }));

app.use(express.json());

app.get("/gallery/:id/", (req, res) => {
  let galleryId = req.params.id;
  return db.findOne({ id: galleryId }).then(photos => {
    res.send(photos);
  });
});

app.listen(port, () => {
  console.log(`Express listening on ${port}`);
});

module.exports = app;
