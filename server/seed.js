const Gallery = require("./db.js");
const imageUrls = require("./urls.js");

const randomNum = () => {
  return Math.floor(Math.random() * 5) + 1;
};

// assigning hardcoded s3 urls for each hotel
for (var i = 0; i < 100; i++) {
  let randomInt = randomNum();
  if (randomInt === 1) {
    let gallery = new Gallery({
      id: i,
      main: imageUrls.cambodia.main,
      dining: imageUrls.cambodia.dining,
      roomsuite: imageUrls.cambodia.roomSuite,
      traveler: imageUrls.cambodia.traveler
    });
    gallery.save();
  }
  if (randomInt === 2) {
    let gallery = new Gallery({
      id: i,
      main: imageUrls.costarica.main,
      dining: imageUrls.costarica.dining,
      roomsuite: imageUrls.costarica.roomSuite,
      traveler: imageUrls.costarica.traveler
    });
    gallery.save();
  }
  if (randomInt === 3) {
    let gallery = new Gallery({
      id: i,
      main: imageUrls.italy.main,
      dining: imageUrls.italy.dining,
      roomsuite: imageUrls.italy.roomSuite,
      traveler: imageUrls.italy.traveler
    });
    gallery.save();
  }
  if (randomInt === 4) {
    let gallery = new Gallery({
      id: i,
      main: imageUrls.singapore.main,
      dining: imageUrls.singapore.dining,
      roomsuite: imageUrls.singapore.roomSuite,
      traveler: imageUrls.singapore.traveler
    });
    gallery.save();
  }
  if (randomInt === 5) {
    let gallery = new Gallery({
      id: i,
      main: imageUrls.tokyo.main,
      dining: imageUrls.tokyo.dining,
      roomsuite: imageUrls.tokyo.roomSuite,
      traveler: imageUrls.tokyo.traveler
    });
    gallery.save();
  }
}
