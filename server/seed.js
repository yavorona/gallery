// seed script mongodb
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/gallery", {
  useNewUrlParser: true
});

var MyModel = mongoose.model(
  "Test",
  new Schema({
    id: Number,
    main: [{ body: String }],
    dining: [{ body: String }],
    rooms: [{ body: String }],
    traveler: [{ body: String }]
  })
);
