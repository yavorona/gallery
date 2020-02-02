// mongodb schema for photo gallery
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/gallery", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let gallerySchema = {
  id: { type: Number, unique: true },
  main: [String],
  dining: [String],
  roomsuite: [String],
  traveler: [String]
};

let Gallery = mongoose.model("Gallery", gallerySchema);

module.exports = Gallery;
